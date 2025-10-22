import { useState, type FormEvent } from "react"


interface SearchBarProps {
    onSearch: (searchText: string) => void
}

function SearchBar ({onSearch}:SearchBarProps) {
    const [searchText, setSearchText] = useState<string>('')

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        onSearch(searchText)
    }

    const handleSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        onSearch(e.target.value)
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchText}
                onChange={handleSearching}
            />
            <button type="submit">Buscar</button>
        </form>
    )
}

export default SearchBar