import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const BbaProgram = () => {
    return (
        <div className="w-11/12 mx-auto py-6">
            {/* Page Title */}
            <div className="relative w-full h-[250px] bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white text-center rounded-2xl">
                <h1 className="text-4xl font-bold">BBA Admission Rules</h1>
            </div>

            {/* Admission Rules Content */}
            <div className="max-w-5xl mx-auto mt-10">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold">Admission Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-700 space-y-4">
                        <p><strong>1.1 General Requirements:</strong> Every applicant must fulfill the admission requirements set by IBA, Rajshahi University. The admission test is held once a year.</p>

                        <p><strong>1.2 Applicants Eligibility:</strong> Applicants must have completed HSC/SSC or equivalent with at least 6 qualifying points. O-Level students must pass at least 5 subjects, and A-Level students must pass at least 2 subjects.</p>

                        <Separator />

                        {/* Eligibility Table */}
                        <h2 className="text-xl font-semibold mt-6">Eligibility Criteria</h2>
                        <Table className="mt-4">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>SSC (GPA/Div)</TableHead>
                                    <TableHead>HSC (GPA/Div)</TableHead>
                                    <TableHead>O’ Level (GPA)</TableHead>
                                    <TableHead>A’ Level (GPA)</TableHead>
                                    <TableHead>Qualifying Points</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>>= 4.0 / 1st</TableCell>
                                    <TableCell>>= 4.0 / 1st</TableCell>
                                    <TableCell>>= 3.0</TableCell>
                                    <TableCell>>= 2.5</TableCell>
                                    <TableCell>3</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>>= 3.5 / 2nd</TableCell>
                                    <TableCell>>= 3.5 / 2nd</TableCell>
                                    <TableCell>>= 2.5</TableCell>
                                    <TableCell>>= 2.0</TableCell>
                                    <TableCell>3</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                        <Separator />

                        <p><strong>1.3 Admission Test:</strong> All applicants (except foreign students) must appear in the admission test, which includes English Language, Analytical Ability, and Basics of Science/Business/Humanities.</p>

                        <p><strong>1.4 Final Selection:</strong> Final selection is based on the marks obtained in the admission test.</p>

                        <p><strong>1.5 Foreign Applicants:</strong> Foreign applicants with an SAT score of 1200+ (at least 400 in verbal) may be exempted from the admission test.</p>

                        <Separator />

                        {/* Fee Structure Table */}
                        <h2 className="text-xl font-semibold mt-6">Fee Structure</h2>
                        <Table className="mt-4">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Semester</TableHead>
                                    <TableHead>Development Fee</TableHead>
                                    <TableHead>Computer Lab Fee</TableHead>
                                    <TableHead>Library Fee</TableHead>
                                    <TableHead>Examination Fee</TableHead>
                                    <TableHead>Total (BDT)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1st Semester</TableCell>
                                    <TableCell>5000</TableCell>
                                    <TableCell>3000</TableCell>
                                    <TableCell>1000</TableCell>
                                    <TableCell>5000</TableCell>
                                    <TableCell>14000</TableCell>
                                </TableRow>
                                {[...Array(7)].map((_, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{`${index + 2}nd Semester`}</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>3000</TableCell>
                                        <TableCell>1000</TableCell>
                                        <TableCell>5000</TableCell>
                                        <TableCell>9000</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow className="font-bold">
                                    <TableCell colSpan={5} className="text-right">Total Fee</TableCell>
                                    <TableCell>87,000 BDT</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                        <Separator />

                        <p><strong>1.6 Registration:</strong> Admitted students must submit their forms with photos and required documents and pay the necessary fees.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default BbaProgram;