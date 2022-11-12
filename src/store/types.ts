export interface noteState {
    id: string,
    text: string,
    isDone: boolean
}

export interface NoteItemProps {
    note: noteState
}