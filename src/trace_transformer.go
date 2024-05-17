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

func (t *TraceTransformer) Transform(i interface{}) interface{} {
	t.l.Trace("TraceTransformer.Transform: %s %v", t.c, i)

	return i
}
