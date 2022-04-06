import styles from './index.less';
import * as monaco from 'monaco-editor'
import Editor, { loader } from '@monaco-editor/react'

loader.config({
  monaco
})

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Editor defaultLanguage={'javascript'} defaultValue={''} height={"20vh"} />
    </div>
  );
}
