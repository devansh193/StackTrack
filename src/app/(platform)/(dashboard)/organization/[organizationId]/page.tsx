import { db } from "@/lib/db";

import {create} from "@/actions/create-Board"
import { Button } from "@/components/ui/button";

const organizationIdPage = async () =>{
    const boards = await db.board.findMany();
    return (
        <div className="flex flex-col space-y-4">
            <form action={create}>
                <input 
                id="title"
                name="title"
                required
                placeholder="Enter a board title"
                className="border-black border p-2"
                />
                <Button type="submit">Submit</Button>
                <form>
                    <div className="space-y-2">
                    {boards.map((board)=>(
                        <div key={board.id}>
                            board title: {board.title}
                        </div>
                    ))}
                    </div>
                </form>
            </form>
        </div>
    );
    };

export default organizationIdPage;