


const SearchResults=({ results, query })=> {
    return (
      <div>
        <h2>Search Results</h2>
        <ul>
          {results.map((result, index) => {
            const regex = new RegExp(`(${query})`, 'gi');
            const parts = result.split(regex);
            return (
              <li key={index}>
                {parts.map((part, i) =>
                  regex.test(part) ? (
                    <span key={i} style={{ backgroundColor: 'yellow' }}>
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  export default SearchResults;