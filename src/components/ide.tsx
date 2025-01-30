"use client";

import { Editor } from "@monaco-editor/react";
import { useRef } from "react";

export default function IDE() {
    const divEl = useRef<HTMLDivElement>(null);

    return (
        <div ref={divEl} className="w-full h-full">
            <Editor
                theme="vs-dark"
                language="markdown"
                value="howdy!"
            />
        </div>
    );
}