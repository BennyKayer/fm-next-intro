import NewTodoForm from "@/components/NewTodoForm";

export default function DashboardLayout({ children }) {
    return (
        <div>
            <h1>dashboard</h1>
            <div>
                <NewTodoForm />
            </div>
            <div>{children}</div>
        </div>
    )
}