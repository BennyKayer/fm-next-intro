import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {

    return (
        <div>
            <form action={newTodo}>
                {/* If some input need funky validation only make that one a client component */}
                <input required type="text" name="content" className="border border-black/25"/>
                <button type="submit">New Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;