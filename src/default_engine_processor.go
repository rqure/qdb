package qmq

type DefaultEngineProcessor struct{}

func NewDefaultEngineProcessor() EngineProcessor {
	return &DefaultEngineProcessor{}
}

func (p *DefaultEngineProcessor) Process(componentProvider EngineComponentProvider) {

}
