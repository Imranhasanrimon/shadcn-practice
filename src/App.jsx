import { Loader2 } from 'lucide-react'
import './App.css'
import { Button } from './components/ui/button'
import { Calendar } from './components/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CardWithForm } from './tools/CardWithForm'



function App() {
  return (
    <>


      <Button className=" mt-2">
        <Loader2 className="animate-spin" />
        Please wait
      </Button>

      <Calendar
        mode="single"

        // selected={date}
        // onSelect={setDate}
        className="rounded-md border"
      />

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <CardWithForm ></CardWithForm>


    </>
  )
}

export default App
