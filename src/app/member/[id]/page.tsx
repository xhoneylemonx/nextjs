// member page with id parameter

export default function MemberPage(parameters: { params: { id: string } }) {
    const {id} = parameters.params;
    return (
        <div>
            <h1 className="text-2xl font-bold text-green-400">Member Detail Page. {id}</h1>
        </div> 
    );
}