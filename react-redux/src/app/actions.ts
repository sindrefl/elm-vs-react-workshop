// actions.ts <-> Message.elm

export const Something = "Something"

interface DefaultAction {
    type: typeof Something,
    payload: string
}

export type Action = DefaultAction