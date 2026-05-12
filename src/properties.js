// SurVis Properties Configuration
// This file configures how keywords are handled

var survisProperties = {
    // Keywords configuration - IMPORTANT: Do NOT split keywords into separate entries
    keywords: {
        split: false,           // Prevent splitting keywords
        separator: ',',         // Separator in BibTeX
        treatAsTag: true,       // Treat keywords as tags
        displayInList: true     // Show in paper list
    },
    
    // Tag configuration
    tags: {
        enabled: true,
        displayMode: 'category', // or 'cloud'
        maxTagsPerPaper: 10
    },
    
    // Entry display
    entry: {
        showType: true,
        showYear: true,
        showVenue: true,
        showAuthors: true,
        showDOI: true,
        showKeywords: true
    }
};
