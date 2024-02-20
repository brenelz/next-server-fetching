import * as fs from "fs";
import { cache } from "react";

const readFile = cache(async (path: string) => {
    const fileText = await fs.readFileSync(path, 'utf-8');

    await new Promise(r => setTimeout(r, 2000));
    return fileText;
});

export const preload = (path: string) => {
    void readFile(path)
}

export async function FileComponent(props: { path: string, children?: any }) {
    const fileText = await readFile(props.path);

    return (
        <>
            <pre>{fileText}</pre>
            {props.children}
        </>
    )
}