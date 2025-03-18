import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const History = () => {
    return (
        <div className="w-11/12 mx-auto py-6">
            {/* Hero Section */}
            <div className="rounded-2xl relative w-full h-[300px] bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white text-center">
                <h1 className="text-4xl font-bold">Our History</h1>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto mt-10">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold">A Legacy of Excellence</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 leading-relaxed">
                            In Bangladesh, the business education at North American style began during the sixties
                            with the collaboration of some North American Universities. With the same enthusiasm,
                            the Institute of Business Administration (IBA) of Rajshahi University was established
                            under the 7th statute of the University in North-South region of Bangladesh.
                        </p>
                        <Separator className="my-4" />
                        <p className="text-gray-700 leading-relaxed">
                            The Institute of Business Administration is one of the five Institutes of Rajshahi University.
                            It started its journey in the year 2000 and academic activities began with an MBA (Evening)
                            Program in 2002. In response to the increasing demand for business education, three more MBA
                            programs – MBA (Day) Program, Executive MBA Program, and MBA for BBA Graduates Program – have
                            been launched by the institute. Additionally, the Ph.D. and M. Phil. program were introduced in 2006.
                        </p>
                        <Separator className="my-4" />
                        <p className="text-gray-700 leading-relaxed">
                            Each program consists of a mix of fresh students and professionals at mid and top-level
                            executive positions in the private sector and state-owned organizations. The MBA Program
                            is well-structured, based on a time frame, and completely free from session jams.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default History;