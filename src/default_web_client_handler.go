package qmq

import (
	"fmt"

	anypb "google.golang.org/protobuf/types/known/anypb"
)

type DefaultWebClientHandler struct{}

func NewDefaultWebClientHandler() WebClientHandler {
	return &DefaultWebClientHandler{}
}

func (h *DefaultWebClientHandler) Handle(client WebClient, componentProvider WebServiceComponentProvider) {
	for i := range client.Read() {
		message := i.(*Message)

		if request := new(WebServiceGetRequest); message.Content.MessageIs(request) {
			message.Content.UnmarshalTo(request)
			response := new(WebServiceGetResponse)
			value, err := anypb.New(componentProvider.WithSchema().Get(request.Key))

			if err != nil {
				componentProvider.WithLogger().Error(fmt.Sprintf("Error marshalling value for key '%s': %v", request.Key, err))
				break
			}

			response.Key = request.Key
			response.Value = value

			client.Write(response)
		} else if request := new(WebServiceSetRequest); message.Content.MessageIs(request) {
			message.Content.UnmarshalTo(request)
			response := new(WebServiceSetResponse)
			componentProvider.WithSchema().Set(request.Key, request.Value)
			client.Write(response)
		}
	}
}