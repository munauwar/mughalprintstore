function CardItems(props) {
    return (
        <div className="mx-auto flex flex-row max-w-full">
            <div className="sm:w-96 py-8 px-6 text-center font-mono">
                <div className="h-full rounded overflow-hidden shadow-lg border-b-2 border-b-red-500 dark:shadow-black">
                    <img className="w-full" src={props.img} alt="visitekaartjes" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 dark:text-white">{props.title}</div>
                        <p className="text-gray-700 text-base dark:text-white">
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItems