module.exports = {
  categoryFilter:
    'Click to toggle whether to show projects from the given category. You can also double click to only include that category. Every project gets a primary category based on its carbon removal mechanism. Most projects also have a secondary category, which is included in searches.',
  search:
    'Type here to search the database. Searches include the project applicant, project location, all category tags, and any project-specific keywords. Search results also depend on other filter selections below. You can type ⌘ + / to focus the search bar without clicking. ',
  sourceFilter:
    'Click to filter based on the project source. Our database is sourced from public project proposals submitted to various entities, such as corporate purchasers of carbon removal. ',
  permanence:
    'The duration in years over which carbon storage can be reasonably assured. For biological systems this duration is typically limited by physical and socioeconomic risks, whereas for chemical or geological systems the duration is effectively permanent.',
  permanenceFilter:
    'This visual filter shows the permanence of each project. If you expand it using the plus, you can click and drag horizontally on the resulting chart to select a range to filter projects by. Values show the duration over which carbon storage can be reasonably assured.',
  volume:
    'The total volume in tCO₂ of carbon removal and/or avoided emissions achieved by the project. We interpret these as gross volumes. Calculting net benefits requires incorporating negativity to account for project emissions.',
  volumeFilter:
    'This visual filter shows the volume of each project. If you expand it using the plus, you can click and drag horizontally on the resulting chart to select a range to filter projects by. Values show the total volume in tCO₂ of carbon removal and/or avoided emissions claimed by the project. Calculting net benefits requires incorporating negativity to account for project emissions.',
  rating:
    'A single rating to reflect our overall confidence in project claims on a scale from 1 to 5. Validation of mechanism, volume, negativity, or permanence, or a perfect score on additionality, each add 1 to the total rating. A minimum score on additionality subtracts 1 from the total rating. Rating does not necessarily reflect project quality, but rather our ability to validate key information.',
  yearFilter:
    'Click to filter based on the year in the which the project was proposed. Most projects are proposed as part of annual or semi-annual procurement process.',
  ratingFilter:
    'Click to filter projects by setting a minimum rating. All projects with a rating as high or higher will be shown. The rating for each project reflects our overall confidence in project claims on a scale from 1 to 5. Validation of mechanism, volume, negativity, or permanence, or a perfect score on additionality, each add 1 to the total rating. A minimum score on additionality subtracts 1 from the total rating. Rating does not necessarily reflect project quality, but rather our ability to validate key information.',
  mechanism:
    'Does the project remove carbon dioxide from the atmosphere (RMV), avoid emissions that would have otherwise occurred (AVD), or both (BOTH)? Projects that only offer carbon storage without removal or avoided emissions are indicated with N/A. While all can have positive climate benefits, the difference matters for accounting purposes.',
  mechanismRating:
    'Click to filter projects based on whether they remove carbon dioxide from the atmosphere (REMOVAL) or avoid emissions that would have otherwise occurred (AVOIDED). Projects that only store carbon dioxide without removing it from the atmosphere or avoiding emissions are shown for either selection. While all can have positive climate benefits, the differences matters for accounting purposes.',
  negativity:
    'Negativity reflects the emissions intensity of different carbon removal solutions, and we define it as 1 minus the ratio of gross project emissions to gross climate benefits.',
  additionality:
    'Additionality refers to the causal relationship between the funds a climate project seeks and the climate benefits it claims. The default score is 2/3, indicating a project could be additional. 1/3 indicates we found a red flag, or a lack of specificity. 3/3 indicates confidence that a project is likely additional, which we additionally indicate with a checkmark.',
  specificity:
    'Specificity reflects access to detailed information in project proposals, publications, or other public materials. The default score is 2/3, indicating a project could be additional. 1/3 indicates critical project data could not be obtained. 3/3 indicates extensive detail on project implementation or planning.',
  price:
    'Price is taken directly from project offerings, and is expressed in $/net tCO₂. Price depends on several other factors, including volume. As reported, price does not reflect project duration.',
}
