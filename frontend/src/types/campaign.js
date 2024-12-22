export const MetricType = {
  CLICKS: 'clicks',
  IMPRESSIONS: 'impressions',
  CTR: 'ctr',
};

export class CampaignMetric {
  constructor(campaignId, campaignName, day, hour, clicks, impressions, ctr) {
    this.campaignId = campaignId;
    this.campaignName = campaignName;
    this.day = day;
    this.hour = hour;
    this.clicks = clicks;
    this.impressions = impressions;
    this.ctr = ctr;
  }
}

export class HeatmapCell {
  constructor(value, day, hour) {
    this.value = value;
    this.day = day;
    this.hour = hour;
  }
}