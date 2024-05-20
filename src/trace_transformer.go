package qmq

type TraceTransformer struct {
	l Logger
	c string
}

func NewTraceTransformer(l Logger, c string) Transformer {
	return &TraceTransformer{
		l: l,
		c: c,
	}
}

func NewTracePushTransformer(l Logger) Transformer {
	return NewTraceTransformer(l, "PUSHING")
}

func NewTracePopTransformer(l Logger) Transformer {
	return NewTraceTransformer(l, "POPPED")
}

func (t *TraceTransformer) Transform(i interface{}) interface{} {
	t.l.Trace("TraceTransformer.Transform: %s %v", t.c, i)

	return i
}
