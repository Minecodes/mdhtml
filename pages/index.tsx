import Head from 'next/head'
import Link from 'next/link'
import "../styles/Home.module.css"
import { useState } from "react"
import md from "marked"
import { TextField, Button, Input } from "@material-ui/core"
import $ from "jquery"

export default function Home() {
  var [ doc, setDoc ] = useState("");

  const changeDoc = (event: any) => {
    setDoc(event.target.value);
  }

  return (
    <div>
      <Head>
        <title>Home - OnlineTools</title>
        <meta name="description" content="Convert markdown to html" />
      </Head>

      <div className="main">
        <br/>
        <br/>
        <h1>Markdown to HTML</h1>
        <br/>
        <br/>
        <TextField variant="outlined" label="Markdown" multiline rows={1} rowsMax={10} size="medium" spellCheck="true" onChange={changeDoc} />
        <br/>
        <br/>
        <Input rows={1} maxRows={28} id="out" readOnly value={md(doc)} type="text" multiline onClick={() => {
          $("#out").select()
          document.execCommand("copy")
        }} /><br/>
        Click to copy
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{
          textAlign: "left"
        }}>
        Impressum:<br/>
<br/>
        Verantwortlich im Sinne der Gesetzgebung bin ich. Ich betreibe diesen WWW-Server privat und ohne gewerblichen Interessen bzw. Angebote.<br/>
        Falls sich fehlerhafte Links oder Angaben eingeschlichen haben sollten, so bitte ich Sie, dies einerseits zu entschuldigen, andererseits<br/>
        mich zu informieren, so dass ich Korrekturen vornehmen kann. Für Inhalte von Seiten, auf die ich per Link verweise, bin ich nicht verantwortlich und kann ich keine Haftung übernehmen.<br/>
<br/>
        Meine Kontaktdaten:<br/>
<br/>
        Thies Ohme<br/>
        Kirchentellinsfurter Str. 34/1<br/>
        72827 Wannweil<br/>
<br/>
        Tel. 07121 / 509 612<br/>
        Fax: 07121 / 509 642 (24h)<br/>
        E-Mail: <Link href="mailto:minecodes13@gmail.com">minecodes13@gmail.com</Link>
        </div>
      </div>
    </div>
  )
}
