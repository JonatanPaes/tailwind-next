'use client'
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const FileInputContex = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContex.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContex.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContex)
