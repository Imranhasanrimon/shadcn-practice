import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useForm } from "react-hook-form"

export function CardWithForm() {
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset()
    }
    // console.log(watch("projectName"));
    return (
        <Card className="w-[350px] mx-auto my-5">
            <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input {...register('projectName', { required: "Project Name is required" })} placeholder="Name of your project" />
                            {errors.projectName && <p className="text-red-500 text-xs">{errors.projectName.message}</p>}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Framework</Label>
                            <Select onValueChange={(value) => setValue("framework", value)} className="w-full">
                                <SelectTrigger className="w-full cursor-pointer" id="framework">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Next.js</SelectItem>
                                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                    <SelectItem value="astro">Astro</SelectItem>
                                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <Button className='cursor-pointer' variant="outline">Cancel</Button>
                        <Button className='cursor-pointer' type="submit">Deploy</Button>
                    </div>
                </form>
            </CardContent>

        </Card>
    )
}
