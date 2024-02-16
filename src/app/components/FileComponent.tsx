import * as fs from "fs";

let fileText = "File Not Loaded";


export async function FileComponent(props: { path: string, children?: any }) {
    fileText = await fs.readFileSync(props.path, 'utf-8');

    await new Promise(r => setTimeout(r, 2000));

    return (
        <>
            <pre>{fileText}</pre>
            {props.children}
        </>
    )
}