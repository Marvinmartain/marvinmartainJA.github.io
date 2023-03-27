# marvinmartainJA.github.io
This is a simple React application that displays top news headlines or 
search results based on user input. It has two components - Form and Display.

The Form components has a search input filed where users can enter a search term.
When submitted, the handleSearch function fetches news articles using the News API
based on the search term.

The App component renders the Form and NewsDisplay components. It uses a useEffect 
hook to fetch top headlines when the components mounts.

The NewsDisplay component receives the news articles and display them on the page.
If not loaded, it displays a "Loading..." message. Otherwise, it maps the articles to 
individual news items and display them on the page with the title, image, description, 
and link to read more.
