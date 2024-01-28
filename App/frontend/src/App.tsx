import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "./components/Navbar"
import { Button } from "./components/ui/button"
import { useRef, useState } from "react";
import { Label } from "./components/ui/label";

function App() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null; // Set to null if no file selected
    setFile(selectedFile);
  };
    const openFileExplorer = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen h-screen box-border p-2">
        <Navbar></Navbar>
        <div className="flex flex-col w-1/2 h-1/2 border">
        <Label className="text-muted-foreground" htmlFor="file-upload">
          upload file
        </Label>
        <Button onClick={openFileExplorer} variant="outline" className="w-full">
          Browse
        </Button>
          <input
            type="file"
            id="file"
            accept=".mp4"
            onChange={handleFileChange}
            ref={fileInputRef}
            hidden
          ></input>
          <span className="text-xs">{file?.name}{file?"*":""}</span>
          <Button>Generate Subtitles</Button>
        </div>

      </div>
    </ThemeProvider>
  )
}

export default App
