interface Topic {
    topic: string;
    relevance_score: number;
}

interface TickerSentiment {
    ticker: string;
    relevance_score: number;
    ticker_sentiment_score: number;
    ticker_sentiment_label: string;
}

export interface FeedItem {
    title: string;
    url: string;
    time_published: string;
    authors: string[];
    summary: string;
    banner_image: string;
    source: string;
    category_within_source: string;
    source_domain: string;
    topics: Topic[];
    overall_sentiment_score: number;
    overall_sentiment_label: string;
    ticker_sentiment: TickerSentiment[];
}

interface SentimentScoreDefinition {
    x: number;
    label: string;
}

interface SentimentScoreDefinitions {
    bearish: SentimentScoreDefinition;
    somewhat_bearish: SentimentScoreDefinition;
    neutral: SentimentScoreDefinition;
    somewhat_bullish: SentimentScoreDefinition;
    bullish: SentimentScoreDefinition;
}

interface RelevanceScoreDefinition {
    min: number;
    max: number;
}

interface FeedData {
    items: number;
    sentiment_score_definition: SentimentScoreDefinitions;
    relevance_score_definition: RelevanceScoreDefinition;
    feed: FeedItem[];
}
