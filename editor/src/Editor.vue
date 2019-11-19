<template>
    <div>
        <button @click="setTheme()">Theme</button>
        <button @click="setFile(1)">Fichier1</button>
        <button @click="setFile(2)">Fichier2</button>
        <FilesTab orientation="top"/>
        <AceEditor v-model="content" @init="editorInit" :lang="lang" theme="twilight" height="100"></AceEditor>
        <FilesTab orientation="bottom"/>

        <pre>
            {{ content }}
        </pre>

        <div class="test"></div>
    </div>
</template>

<script>
import ace from 'ace-builds';
import AceEditor from './AceEditor.vue';
import FilesTab from './FilesTab.vue';

export default {
    components: {
        AceEditor,FilesTab
    },

    data() {
        return {
            editor: null,
            content: "<?php\necho 'Hello World';\n",
            lang: 'php',
            session: null
        }
    },

    methods: {
        editorInit: function (editor) {
            this.editor = editor;
//            ace.require('ace/ext/language_tools'); //language extension prerequsite...
            // ace.config.loadModule('ace/mode/html');
             //ace.config.loadModule('ace/mode/javascript');   //language
            // ace.config.loadModule('ace/mode/php');
            //ace.config.loadModule('ace/theme/twilight', () => this.editor.setTheme('ace/theme/twilight'));
            // ace.require('ace/theme/twilight');
            // ace.config.loadModule('ace/theme/chrome', () => this.editor.setTheme('ace/theme/chrome'));
  //          ace.config.loadModule('ace/snippets/php'); //snippet

        },

        setTheme() {
            this.editor.setTheme('ace/theme/twilight');
        },
        setFile(n) {
            var EditSession = ace.require("ace/edit_session").EditSession;
            if (this.session === null) {
                this.session = this.editor.getSession();
                var session = new EditSession("var xx = 1;");
                this.editor.setSession(session);
                this.lang = 'javascript';
            } else {
               /* var session = new EditSession(["div {", "color: red;", "}"]);
                this.editor.setSession(session);
                this.lang = 'css';*/
               let session = this.editor.getSession();
               this.editor.setSession(this.session);
               this.session = session;
            }
// and then to load document into editor, just call
        }
    }
};
</script>

<style lang="scss">
    body
{
    background: black;
}

pre
{
    color: white;
}

    div.test {
        background-color: red;
        width: 100px;
        height: 100px;
    }
</style>
