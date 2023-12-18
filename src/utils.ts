import fs from 'fs'
import path from 'path'
import { promisify } from "utils"

const readFilePath = async (filePath: string) => {
    const readFile = promisify(fs.readFile)
    const fileContent = await readFile(path.join(process.cwd(), filePath), 'utf8')
    return fileContent
}

const getCode = async (filePath: string) => {
    const code = await readFilePath(filePath)

    if (code.includes("'use client'")) {
        return code.slice(13)
    }

    // if component has use client in it we will remove it because these are react components, not nextjs components

    return code
}