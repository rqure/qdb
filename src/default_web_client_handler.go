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
	for message := range client.Read() {
		if request := new(WebServiceGetRequest); message.Content.MessageIs(request) {
			message.Content.UnmarshalTo(request)
			response := new(WebServiceGetResponse)
			value, err := anypb.New(w.schema.Get(request.Key))

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
			w.schema.Set(request.Key, request.Value)
			client.Write(response)

			for _, handler := range w.setHandlers {
				handler.OnSet(w, request.Key, request.Value)
			}
		}
	}
}
