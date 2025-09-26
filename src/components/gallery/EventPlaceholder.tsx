import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function EventPlaceholder() {
  return (
    <Card className="flex flex-col items-center justify-center border-dashed border-2 border-gray-300 p-6 text-center bg-gray-50 rounded-2xl shadow-sm">
      <CardHeader>
        <Calendar className="w-12 h-12 text-gray-400 mb-2" />
        <CardTitle className="text-lg text-gray-500">Upcoming Event</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">
          Photos will appear here once the event starts.
        </p>
      </CardContent>
    </Card>
  );
}
