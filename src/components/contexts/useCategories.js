import  { useState, useEffect } from 'react'

export function useCategories() {
    const [categories, setCategories] = useState()
    useEffect(() => {
        fetch('https://opentdb.com/api_category.php')
        .then(response => response.json())
        .then(data => {
            setCategories(data.trivia_categories)
        })
    }, [])

    return categories
}

