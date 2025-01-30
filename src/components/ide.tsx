"use client";

import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import type { editor } from "monaco-editor";

export default function IDE() {
    const divEl = useRef<HTMLDivElement>(null);
    const [editor, setEditor] = useState<editor.IStandaloneCodeEditor | null>(null);

    useEffect(() => {
        if (!divEl.current) return;

        const resizeObserver = new ResizeObserver(() => {
            if (editor) {
                editor.layout();
            }
        });

        resizeObserver.observe(divEl.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [editor]);

    const handleEditorDidMount = (editor: editor.IStandaloneCodeEditor) => {
        setEditor(editor);
    };

    return (
        <div ref={divEl} className="w-full h-full">
            <Editor
                theme="vs-dark"
                language="markdown"
                value="howdy!"
                onMount={(editor) => handleEditorDidMount(editor)}
            />
        </div>
    );
}
