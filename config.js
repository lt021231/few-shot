// SurVis Configuration
// This configuration prevents keywords from being split into separate entries

var survisConfig = {
    // BibTeX file path
    bibFile: 'bib/references.bib',
    
    // Paper data source
    dataSource: 'bib',
    
    // Fields to display
    fields: {
        title: true,
        authors: true,
        year: true,
        venue: true,
        doi: true,
        keywords: true
    },
    
    // Keywords configuration - IMPORTANT: Do NOT split keywords
    keywords: {
        split: false,  // Set to false to prevent splitting keywords into separate entries
        separator: ',', // Separator used in BibTeX keywords field
        display: true   // Display keywords in the interface
    },
    
    // Filtering options
    filters: {
        year: true,
        venue: true,
        keywords: true,
        authors: true
    },
    
    // Sorting options
    sorting: {
        default: 'year',
        options: ['year', 'title', 'authors', 'venue']
    },
    
    // Display options
    display: {
        itemsPerPage: 20,
        showAbstract: false,
        showDOI: true,
        showKeywords: true
    },
    
    // Visualization options
    visualization: {
        timeline: true,
        categoryCloud: true,
        authorCloud: false
    }
};
