// actions.ts <-> Message.elm

export const DEFAULT = "DEFAULT"

interface DefaultAction {
    type: typeof DEFAULT,
    payload: string
}

export type Action = DefaultAction