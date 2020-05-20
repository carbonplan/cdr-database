export const meta = {
  revised: '05-20-2020'
}

# Projects

Here we provide detailed methods for projects we have analyzed. All analysis and evaluation is based on information provided in public project proposals, publications, and our own research. We do not exhaustively list methods for every metric for every project, but rather highlight specific considerations made or calculations performed. Methods are minimal if all information for that project is provided in the notes and comments in our reports.

Here and elsewhere, our primary focus is analyzing and independently validating scientific plausibility and credibility. Our hope is that sharing data and insights can benefit the field as a whole, and complement the work of the inventors, scientists, entrepreneurs, and activists who are making climate solutions a reality. 

## Biorecro

Validation is challenging for this project without more specific details on projects. Biorecro appears to be a broker that facilitates late-stage BECCS projects. While BECCS is an established technology (Fuss et al., 2018), its key parameters — in particular volume, negativity, and permanence — rely on the details of both the bioenergy feedstock and the mechanisms for capturing and sequestering emissions produced during bioenergy production. Insofar as Biorecro works with several projects, details on those projects would be needed to validate most of our metrics.

## Breadtree Farms

Project claims a range of 56 tCO<sub>2</sub> to 140 tCO<sub>2</sub> in the first year over the 4.9 ha they are adding to the project, reflecting both the planting of new chestnut trees and changes to grazing practices to increase soil carbon sequestration. While this estimate is based on 1 year, one could potentially extrapolate to a volume of 1680 tCO<sub>2</sub> for the 30 year duration of the problem. The low end estimate is based on COMET-Farms and the high end estimate is based on Eric Toensmeier's The Carbon Farming Solution. The low end volume would correspond to a carbon accrual rate of 11.42 tCO<sub>2</sub> / ha / year. As points of comparison from similar forest type groups, afforestation rates from USFS yield tables for live tree carbon stocks are 5.43 tCO<sub>2</sub> / ha / yr for Maple  / Beech / Birch in the Northeast and 5.06 tCO<sub>2</sub> / ha / yr for Oak  / Hickory in the Northeast (Smith et al., 2005) (annual rate based first 5 yr of growth). The provided volume number thus appears high if it only reflects above ground biomass. However, a range of farming practices are planned, including changes to grazing practices, and the claimed volume also likely includes soil carbon sequestration related to these changes in practice. COMET-Farms was used for these estimates, but we are unable to validate how it was used or parameterized. This uncertainty is further reflected in our uncertainty in the life cycle analysis and negativity, alongside questions around methane emissions from livestock.

## Bluesource Doe Mountain

Claimed volume is based both on the standing stock (in the form of avoided emissions) and future growth over an area of 3,433.83 ha over a 20 year project duration. Based on the table provided in the project proposal, the total claimed volume includes 166.65 tCO<sub>2</sub> / ha for the standing stock (ignoring the buffer pool deduction) and 2.89 tCO<sub>2</sub> / ha / yr for growth (assuming 20 yrs). Given the location and the species (mix of Hardwoods, Oak / Hickory, Cove forest, and Oak / Pine), we can validate against USFS yield tables. For example, growth rates range from 4.3 tCO<sub>2</sub> / ha / yr (years 70-90) to 7.3 tCO<sub>2</sub> / ha / yr (years 0-20) for Oak / Hickory in the Southeast, with a standing stock ranging from 77.1 - 351.6 tCO<sub>2</sub> / ha (for stand ages 10 - 50 yrs), and growth rates range from 3.7 tCO<sub>2</sub> / ha / yr (years 70-90) to 7.2 tCO<sub>2</sub> / ha / yr (years 0-20) for Oak / Pine in the Southeast, with a standing stock ranging from 72 - 326.3 tCO<sub>2</sub> / ha (for stand ages 10 - 50 yrs) (Smith et al., 2005). While we do not know stand ages or ranges, the provided volume numbers fall within established ranges.

## Carbo Culture

The reported volume is 62 tCO<sub>2</sub>. Given the stated C fraction of 85%, this corresponds to a C volume of 16.89 tC. To validate volume and permanence, we use a simple decay model based on Campbell et al. (2019) and data reviewed in Spokas (2010) (see [Jupyter notebook](https://github.com/carbonplan/notebooks/tree/master/biochar) for details). The stated composition ratio of O:C of 0.08 corresponds conservatively to a half life of 4474 years. Assuming a first order exponential decay with a half life of 4474 yields a decay constant of k = log(2) / 4474 = 0.00015. 90% of the biochar volume will remain in 680 years via the equation -log(0.9)/k, so consistent with biochar projects, we express the permanence as 680 years, and the volume as 90% of 62, or 55.80 tCO<sub>2</sub>. This should be considered approximate, as permanence is only weakly correlated with composition, and likely depends as much or more so on the decay environment (Campbell et al., 2019). Further analysis of the volume would require knowing the decay rate of the feedstock for comparison. 

We were unable to extend the 90% correction on volume to the calculation of negativity, as the negativity was provided directly as a ratio, and while several components and emissions were listed, the relationship between the ratio and the components was not clear to us, so we could not reexpress the ratio in terms of the underlying volumes.

## Carbofex

The reported volume is 2500 tCO<sub>2</sub>. Given the stated C fraction of 92%, this corresponds to a C volume of 681.20 tC. To validate volume and permanence, we use a simple decay model based on Campbell et al. (2019) and data reviewed in Spokas (2010) (see [Jupyter notebook](https://github.com/carbonplan/notebooks/tree/master/biochar) for details). The stated composition ratio of O:C of 0.021 corresponds approximately to a half life of 5720 years. Assuming a first order exponential decay with a half life of 5720 yields a decay constant of k = log(2) / 5720 = 0.00012. 90% of the biochar volume will remain in 869 years via the equation -log(0.9)/k, so consistent with biochar projects, we express the permanence as 869 years, and the volume as 90% of 2500, or 2250.00 tCO<sub>2</sub>. This should be considered approximate, as permanence is only weakly correlated with composition, and likely depends as much or more so on the decay environment (Campbell et al., 2019). Further analysis of the volume would require knowing the decay rate of the feedstock for comparison.

In addition, we noted a discrepancy: the referenced Puro verification reports a rate of 3.1 tCO<sub>2</sub> stored for 1 t of biochar, rather than the 3.4 tCO<sub>2</sub> stated in the project application; the Puro verification rate would imply a C fraction of 85%, rather than 92%.

For consistency, the 90% correction on volume was extended to the calculation of negativity, specifically, applied to the 3.4 tCO<sub>2</sub> stored (relative to 0.17 tCO<sub>2</sub> emitted), and negativity was recomputed.

## Carbon Sequestration Inc

Project proposes to use wood burial for carbon removal as described in Zeng (2008). That article is itself more of a speculative proposal and conceptual assessment rather than an explicit technology, and while establishing the potential for this as an approach, also raises several concerns, in particular around how burial conditions and pit design might affect decomposition rates and emissions, the construction necessary (and its role in a life cycle assessment), and potential unexpected ecosystem consequences. As such, this is an early stage technology, and lacking more specifics (or demonstration projects) makes it difficult to validate most metrics. We have flagged the permanence metric for this project because the significant claimed duration of 100 years does not adequately account for the fact that pits are partially above-ground and risk emission leakage. This issue needs to be addressed comprehensively.

## CarbonCure

The CarbonCure process utilizes CO<sub>2</sub> for mineralization in building materials, and has at least one peer reviewed publication on the approach (Monkman & MacDonald, 2017). At least in its current deployments, the CO<sub>2</sub> is sourced from an industrial CO<sub>2</sub> waste stream (as stated in their LCA: “Carbon dioxide is captured from the air from a by-product or waste stream of an industrial process.”) For this reason, from a lifecycle perspective, its entire volume represents avoided emissions, not carbon removal, even though the same technology when coupled to, say, direct air capture, would constitute a carbon removal system.

## Charm Industrial

This project is a proposal to combine two existing components, fast pyrolysis for converting  biomass to bio-oil, and underground waste injection of the bio-oil for permanent storage. The current project plans to source the bio-oil from an existing source and demonstrate geological sequestration in Class I injection wells, in North America and Europe. The underlying component technologies are well established, and two papers are referenced that present theoretical analysis of the potential for combining them (Schmidt et al., 2019; Werner et al., 2018). We consider the volume validated as it is simply a function of the planned bio-oil procurement. Specifically, given the stated ratio of 1.55 tCO<sub>2</sub> for every 1 t of bio-oil (which corresponds to  42% C content for the bio-oil), we infer that 6452 t bio-oil will be procured. 

A minor clarification on negativity is that the project estimates 1.53 tCO<sub>2</sub> removed and 0.347 tCO<sub>2</sub> of process emissions, yielding a ratio of 1 - 0.347 / 1.53 = 0.773. They however report a ratio of 1 - 0.28 = 0.72 , likely because they took a different ratio. We report our recomputed number for consistency.
 
## Climeworks

The project combines direct air capture via a solid chemical sorbent and thermal swing, with geological sequestration in mineral form via injection into basaltic rock using the published CarbFix method (Gunnarsson et al., 2018; Snæbjörnsdóttir et al., 2020). The reported volume of 50 tCO<sub>2</sub> / yr is based on a small pilot plant in Iceland commissioned in 2017. We used a back of the envelope calculation to evaluate the plausibility of this number. ClimeWorks claims they use amine sorbents. Assuming an adsorption capacity of 2 mmol CO<sub>2</sub> / g (Sanz-Peŕez et al., 2016), a range of 4-6 cycles per day, and a range of 200-500 kg or sorbent for the pilot plant, yields sequestration volumes of approximately 25-70t CO<sub>2</sub> / yr, making the estimate highly plausible.

## Droneseed

Project reports a volume of 510 tCO<sub>2</sub> in the first year (2020), 31027 tCO<sub>2</sub> of 51 years, and 64031 tCO<sub>2</sub> over 100 years for a project size of  211 ha. We report the intermediate number as 51 years is stated as the project duration. These numbers exactly match the values in USFS yield tables assuming Ponderosa Pine in the Pacific Northwest, East region and starting from a stand age of 0 (Smith et al., 2005). Given that this is previously burned land and thus will primarily involve new forest growth, using these numbers directly is appropriate and we consider the claimed volume validated.

## Ecoera

The reported volume is 5000 tCO<sub>2</sub>. Given the stated C fraction of 78%, this corresponds to a C volume of 1746.66 tC. To validate volume and permanence, we use a simple decay model based on Campbell et al. (2019) and data reviewed in Spokas (2010) (see [Jupyter notebook](https://github.com/carbonplan/notebooks/tree/master/biochar) for details). The stated composition ratio of O:C of 0.039 corresponds approximately to a half life of 5310 years. Assuming a first order exponential decay with a half life of 5310 yields a decay constant of k = log(2) / 5310 = 0.00013. 90% of the biochar volume will remain in 807 years via the equation -log(0.9)/k, so consistent with biochar projects, we express the permanence as 807 years, and the volume as 90% of 5000, or 4500.00 tCO<sub>2</sub>. This should be considered approximate, as permanence is only weakly correlated with composition, and likely depends as much or more so on the decay environment (Campbell et al., 2019). Further analysis of the volume would require knowing the decay rate of the feedstock for comparison.

For consistency, the 90% correction on volume was extended to the calculation of negativity, specifically, applied to the 2.79 tCO<sub>2</sub> stored (relative to 0.046 tCO<sub>2</sub> emitted), and negativity was recomputed.

## Ekovilla

Regarding the life cycle analysis, similar to other building material projects, the analysis begins with sourcing the feedstock, but given that in this case the a significant component of the feedstock is itself a derived product (paper), emissions associated with its production should be included. While this may not significantly affect the resulting negativity, it remains an unknown, leaving questions as to the total value.

Regarding the permanence of these building materials, while there is existing literature on the duration of stage in traditional wood products (Hepburn et al., 2019, Lippke et al., 2011), less can be said with confidence about the blown loose wool materials produced by Ekovilla. While it is likely still longer in duration than the corresponding feedstock, we are less confident validating the claimed duration of 50 years.

## Finnish Log House Industry Association

Regarding the permanence of wooden building materials, they are generally considered to last longer than wood in forests, likely decades and possibly centuries (Hepburn et al., 2019, Lippke et al., 2011), and a detailed survey of housing in the United States found that more than half of wood-based housing stock was at least 80 years old (Winistorfer et al., 2005). Thus, we consider the lower bound of 50 reported for this project within a highly plausible range.

## Future Forest 

For a 174 ha land project in Scotland, project claims a breakdown of total volume as including 18.3 - 25.7 tCO<sub>2</sub> / ha / yr for above ground biomass, 7.3 - 25.7 tCO<sub>2</sub>E / ha / yr for soil carbon, and 11 - 22 tCO<sub>2</sub> / ha / yr for biochar. For the above ground biomass portion, an initial point of comparisons includes published estimates in the US based on USFS yield tables, which range from 1.14 tCO<sub>2</sub> / ha / yr to 11.56 tCO<sub>2</sub> / ha / yr (Fargione et al., 2018, which is itself based directly on USFS yield tables for Ponderosa Pine and Douglas-fir). An additional point of comparison comes from yield tables for Sitka Spruce in the UK, which include reports of 10 tCO<sub>2</sub> / ha / yr to  26 tCO<sub>2</sub> / ha / yr (Magnani et al., 2007), depending on stand age, regional conditions, and productivity. Based on these comparisons, the above ground biomass component of volume reported by the project 18.3 - 25.7 tCO<sub>2</sub> / ha / yr is high, but not implausible. The rates for soil carbon and biochar are more difficult to validate without more specifics on planned practices, and the value for soil in particular appears high. Thus, the overall volume appears high, and further details would be required for validation.

## GreenSand

A challenge validating this project proposal is that the weathering time scale and exact material procurement underlying the claimed volume are not entirely clear. Based on public details from other deployments on the [project website](https://www.greensand.nl/nieuws), the expected carbon removed in 2020 from weathering for all GreenSand deposits deployed since 2007 totals 361 tCO<sub>2</sub>, which comes from (2756 tCO<sub>2</sub> cumulatively removed by 2020) - (2395 tCO<sub>2</sub> cumulatively removed by 2019). It is not clear whether the claimed volume of 1000 tCO<sub>2</sub> reflects the carbon removal expected in one year based on 1) previous deployments that will remove the stated amount in 2020 due to ongoing weathering (which would be at odds with public website information), 2) based on a additional deployment, which would have to be large (potentially tens to hundreds of thousands of tons of olivine), or 3) an amount expected over some unspecified time horizon beyond one year. Further information would be required to validate the given estimate.

In general, the expected volume of carbon removal for olivine depends on the ratio of magnesium to iron, and whether weathering results in alkalization of runoff and/or formation of carbonate precipitates. The ratio of tCO<sub>2</sub> removed per t of olivine can range from 0.61 (assuming 94% magnesium and only precipitation of carbonate minerals) to 1.25 (assuming 100% magnesium and all dissolved bicarbonates) (Montserrat et al., 2017; Renforth & Henderson, 2017). The life cycle analysis references a ratio of 0.75 apparently in regards to this quantity, which falls within a plausible range. But again, without knowing the assumed time scale or the actual volume of olivine procured, we have difficulty validating the reported volume.

## Indigo Ag

The reported volume range of 100k to 1M tCO<sub>2</sub> / yr corresponds to unknown modified farming practices applied to an unknown number of participating farms. A wide variety of practices can potentially increase soil carbon sequestration, and rates associated with specific practices are likely to be variable and challenging to quantify (Smith et al., 2019; Poeplau & Don, 2011; Sanderman & Baldrock, 2010). If we assumed, for example, practices that increase soil carbon sequestration at a rate of 1 tCO<sub>2</sub> / ha / yr, we could infer that it would be necessary for 0.5M ha of farmland across all project participants. Lacking any specifics on either dimension, it is difficult to validate or judge the plausibility of the volume. The project also references a Climate Action Reserve [protocol development process](https://www.climateactionreserve.org/how/protocols/soil-enrichment/) that has not yet been finalized.

## Nori Harborview Farms

Validating the claimed 14011 tCO<sub>2</sub> volume for this project is difficult due to a lack of information. Nori does provide on its project page the locations and NRTs (claimed sequestered volumes) associated with each plot. However, Nori specifies in its Croplands Methodology v1.1 a range of possible practices that farmers might adopt to increase soil carbon sequestration, including “changing or expanding crop rotations and cropping intensity, introducing cover crops and/or shifting from annuals to perennials, reducing tillage events and intensity and/or adopting new residue management techniques, adopting new irrigation management techniques, or substituting synthetic fertilizers with organic matter additions”. Without knowing the specific mechanisms used in each plot, it is difficult to estimate a range of potential sequestration rates, as rates are likely to be highly variable and challenging to quantify (Smith et al., 2019; Sanderman & Baldrock, 2010). Nori itself provides a range of 0.5 to 7.4 tCO<sub>2</sub> / ha / yr as plausible in its Croplands Methodology. Examples in the literature for at least some practices fall within that range, though are genreally on the lower end, e.g. 1.17 ± 0.29 tCO<sub>2</sub> / ha /  yr for cover cropping (Poeplau & Don, 2011), 0.92 ± 0.78 tCO<sub>2</sub> / ha /  yr for several practices including conversion from convential tillage to no tillage (Sanderman & Baldrock, 2010), and 1.43 tCO<sub>2</sub> / ha /  yr for using no tillage (Sperow, 2015).

To contextualize the project within this range, we inspected a subset of four plots. While shape files were not directly available, we used a [web tool](https://www.mapdevelopers.com/area_finder.php) to approximately estimate four plot areas (Crewe II-1, Colchester 12, Ernies, Elder 1234), and then used the reported sequestration volumes to estimate rates of 6-11 tCO<sub>2</sub> / ha / yr. These would be rather high if meant to reflect one year, but Nori’s methodology suggests that this may be a pilot project, in which the claims credits reflect multiple years of sequestration and far more clearly within a plausible range. Thus, we remain uncertain as to the claimed volumes.

## Ocean-based Climate Solutions

This proposal describes an experimental technology that uses ocean wave energy to upwell seawater from 500m to trigger phytoplankton blooms and absorb dissolved CO​2, followed by downwelling to 600m or below. This fits within a broader category of ocean fertilization strategies, which remain unproven with respect to efficacy and monitoring, and are somewhat controversial due to poorly understood potential risks (Williamson et al., 2012). A prototype of the specific proposed method was developed in 2018. Planned measurement is based on deploying biogeochemical (BGC) ARGO robotic float (Bittig et al., 2019) for every 18 pumps. Technology is clearly still early-stage, with key measurements pending and a model simulation unpublished. As such, it is difficult to validate along our metrics, but further information and data needed about the approach would be useful.

## Pachama Rip's Redwoods and Guanare

Project directly reports rates of 16 tCO<sub>2</sub> / ha / yr for the Rip’s Redwoods development, and 26 tCO<sub>2</sub> / ha / yr for Guanare. The total volume estimates are then based on these rates projected over the project durations of 60 and 100 years for the two projects, respectively. The Rip’s Redwoods appears to be a mix of Douglas Fir and Coastal Redwoods. Values in USFS yield tables for Douglas Fir in the Pacific Northwest are as high as 11.56 tCO<sub>2</sub> / ha / yr over a 20 year period (Smith et al., 2005), so the reported rate is very high but not implausible. A more accurate estimate would incorporate stand age, which was not provided, so as to better estimate current growth rates. The Guanare project appears to include mainly eucalyptus, which has published growth rates of 5.02 to 27.65 tCO<sub>2</sub> / ha / yr over an initial 3 years of growth (Ahimana & Maghembe, 1987), so the reported rate is again high but not implausible, but validation would require incorporating stand age.

In both cases, validation of volume estimates would benefit either from additional information on projects, or open sourcing some of the proprietary remote sensing based methods and datasets the project uses. While existing literature using remote sensing for estimating forest carbon stocks is established, and some of it is referenced, this is a complex topic that would benefit from more public data and reproducible methods.

In terms of permanence risk, we have not specifically analyzed fire risk for the Guanare project but it is stated by the project as high. Risk for Rip’s Redwoods, given its ecoregion, is likely low to moderate (Anderegg et al., in publication), and we will soon provide more specific estimates of this risk, alongside risks related to drought and insects. Questions around permanece on the provided time horizon have more to do with socioeconomic risks such as default or bankruptcy.

## Project Vesta

Reported volume is based on an assumption of 1.25 tCO<sub>2</sub> removed per 1 tCO<sub>2</sub> of olivine added to the ocean. If 160 t of olivine were procured, and assuming that ratio, a volume of 200 tCO<sub>2</sub> would be achieved. 

The ratio of 1.25 is an upper bound on the realizable ratio. First, significant uncertainty remains around the timescale and extent of olivine cation dissociation in ocean environments, and many factors could reduce yield. Second, in general, for olivine weathering in ocean water, the ratio will depend on 1) the proportion of magnesium to iron in the olivine, 2) the equilibrium ratio of bicarbonates to carbonates in seawater, which itself depends on atmospheric pCO<sub>2</sub> and local alkalinity, and 3) the final state of the stored carbon. If the proportion of magnesium to iron is 1:0 then we calculate the molar mass of olivine of 140.7 g/mol (the molar mass of Mg<sub>2</sub>SiO<sub>4</sub>). Only if all the ingassed CO<sub>2</sub> is stored as bicarbonate ions, 1 mole of olivine results in 4 moles of captured carbon, which yields a ratio of 4 * 44 g/mol CO<sub>2</sub> /  140.7 g/mol Mg-olivine = 1.25, the ratio provided in the proposal. 

However, using a more realistic ratio of magnesium to iron of 0.94:0.06 (Montserrat et al., 2017) gives a molar mass of olivine of 0.94 x 140.7 g/mol Mg-olivine + 0.06 * 203.8 g/mol Fe-olivine = 144.49 g/mol. And when using a more realistic bicarbonate to carbonate mole ratio, adding 1 mole of Mg adds between 1.4 and 1.7 moles of carbon (Section 2.3, Renforth & Henderson, 2017), giving a total ratio of about 3.1 x 44 g/mol CO<sub>2</sub> /  144.49 g/mol olivine = 0.944. In the limiting case where dissolution of olivine directly drives precipitation of carbonate minerals, the ratio could be as low as 2 x 44 g/mol CO<sub>2</sub> /  144.49 g/mol olivine = 0.61, but this limit is unlikely to be reached given precipitation timescales and alkalinity levels.

For the life cycle analysis, the lower ratio would also translate to a lower negativity, holding all other variables constant. A ratio of 0.944, for example, would yield a negativity of 1 - 0.049/0.944 = 0.948.

Thus, while plausible, the reported numbers reflect an upper bound, so we consider them with some uncertainty pending future experiments and data.

## Rizome

Reported volume is based on a 1000 ha pilot. The total volume includes both 15680 tCO<sub>2</sub> via reforestation with giant bamboo (Dendrocalamus asper) and 4020 tCO<sub>2</sub> based on storage of existing culms. For the reforestation component, for the first year of growth, that corresponds to 15.7 tCO<sub>2</sub> / ha / yr. Published literature on a related species of giant bamboo reports rates of 29.8 tCO<sub>2</sub> / ha / yr (Yen and Lee, 2011), so these rates seem plausible, though we could not find published yield tables for the specific species in question. In addition, given several other potential sources of variability due to regional conditions, further validation of volume would likely require ground measurements once the project is underway. 

## SilviaTerra

This project is based on a novel forest carbon “rental” scheme which has been proposed in the economic literature (Sohngen & Mendelsohn, 2003) but not yet implemented. In the scheme, forest owners are paid to delay harvests by 1 year. A pilot was deployed in 2019 in Pennsylvania spanning 6 counties for 300000 tCO<sub>2</sub>-years, and the proposal is to expand this approach to 11 states in the US south, mainly involving pine forests. The plausibility of the volume depends on the details of implementation, which were not provided. Project refers to remote sensing based methods for validating both stocks (which should be straightforward) and a highly-detailed, acre-by-acre analysis of business as usual, and intentions to open these methods for public review, which would be welcome and enable further validation of this approach.

## Soil Value Exchange

The proposal described several examples of soil carbon and ranching-related carbon storage studies, but it’s not clear what specific practices will be used by projects that participate in the program. The overall claimed volume of 33000 tCO<sub>2</sub> is based on the participation of 10-30 ranches (depending on ranch size) totaling about 13360 ha and assuming 2.47 tCO<sub>2</sub> / ha / yr. While there is significant variability and uncertainty in soil carbon sequestration across practices, that value is commensurate with a range from existing literature, for example 1.17 ± 0.29 tCO<sub>2</sub> / ha /  yr for cover cropping (Poeplau & Don, 2011), 0.92 ± 0.78 tCO<sub>2</sub> / ha /  yr for a mix of practices including conversion from convential tillage to no tillage (Sanderman & Baldrock, 2010), and 1.43 tCO<sub>2</sub> / ha /  yr for using no tillage (Sperow, 2015). The project mentions a protocol that is under development in collaboration with Rice University, but is not yet available. The project indicated that a lifecycle analysis and future studies would be provided in the future. This kind of information would facilitate independent assessment.

## Vandersanden

The project uses CO<sub>2</sub> for mineralization in building materials. At least in its current deployments, the CO<sub>2</sub> is sourced from waste streams (as stated in their LCA materials). From a lifecycle perspective, its entire volume represents avoided emissions, not carbon removal, even though the same technology when coupled to, say, direct air capture, would constitute a carbon removal system.

## References

First we list all references mentioned above. Afterward we list supplementary references that inform our general thinking on these topics.

Ahimana & Maghembe (1987) Growth and biomass production by young Eucalyptus tereticornis under agroforestry at Morogoro, Tanzania, Forest Ecology and Management, [DOI](https://doi.org/10.1016/0378-1127)

Bittig et al. (2019) A BGC-Argo Guide: Planning, Deployment, Data Handling and Usage, Frontiers in Marine Science, [DOI](https://doi.org/10.3389/fmars.2019.00502)

Campbell et al. (2018) Potential carbon storage in biochar made from logging residue: Basic principles and Southern Oregon case studies, PLOS One, [DOI](https://doi.org/10.1371/journal.pone.0203475)

Fuss et al. (2018) Negative emissions—Part 2: Costs, potentials and side effects, Environmental Research Letters, [DOI](https://doi.org/10.1088/1748-9326/aabf9f)

Gunnarsson et al. (2018) The rapid and cost-effective capture and subsurface mineral storage of carbon and sulfur at the CarbFix2 site, International Journal of Greenhouse Gas Control, [DOI](https://doi.org/10.1016/j.ijggc.2018.08.014)

Hepburn et al., (2019) The technological and economic prospects for CO2 utilization and removal, Nature, [DOI](https://doi.org/10.1038/s41586-019-1681-6)

Lippke et al. (2011) Life cycle impacts of forest management and wood utilization on carbon mitigation: knowns and unknowns, Carbon Management, Carbon Management, [DOI](https://doi.org/10.4155/CMT.11.24)

Magnani et al. (2007) The human footprint in the carbon cycle of temperate and boreal forests, Nature, [DOI](https://doi.org/10.1038/nature05847) 

Monkman & MacDonald (2017) On carbon dioxide utilization as a means to improve the sustainability of ready-mixed concrete, Journal of Cleaner Production, [DOI](https://doi.org/10.1016/j.jclepro.2017.08.194)

Montserrat et al. (2017) Olivine Dissolution in Seawater: Implications for CO2 Sequestration through Enhanced Weathering in Coastal Environments, Environmental Science & Technology, [DOI](https://doi.org/10.1021/acs.est.6b05942)

Poeplau & Don (2015) Carbon sequestration in agricultural soils via cultivation of cover crops
– A meta-analysis, Agriculture, Ecosystems and Environment, [DOI](http://doi.org/10.1016/j.agee.2014.10.024)

Renforth & Henderson (2017) Assessing ocean alkalinity for carbon sequestration, Review of Geophysics, [DOI](https://doi.org/10.1002/2016RG000533)

Sanderman & Baldrock (2010) Accounting for soil carbon sequestration in national inventories: a soil scientist’s perspective, Environmental Research Letters, [DOI](http://doi.org/10.1088/1748-9326/5/3/034003)

Sanz-Peŕez et al. (2016) Direct Capture of CO2 from Ambient Air, Chemical Reviews, [DOI](https://doi.org/10.1021/acs.chemrev.6b00173)

Schmidt et al. (2018) Pyrogenic carbon capture and storage, Global Change Biology Bioenergy, [DOI](https://doi.org/10.1111/gcbb.12553)

Smith et al. (2005) Methods for calculating forest ecosystem and harvested carbon with standard estimates for forest types of the United States

Smith et al. (2019) How to measure, report and verify soil carbon change to realize the potential of soil carbon sequestration for atmospheric greenhouse gas removal, Global Change Biology, [DOI](https://doi.org/10.1111/gcb.14815)

Snæbjörnsdóttir et al. (2020) Carbon dioxide storage through mineral carbonation, Nature Reviews Earth and Environment, [DOI](http://doi.org/10.1038/s43017-019-0011-8)

Sohngen & Mendelsohn (2003) An Optimal Control Model of Forest Carbon Sequestration, American Journal of Agricultural Economics, [DOI](http://hdl.handle.net/10.1111/1467-8276.00133)

Sperow (2016) Estimating carbon sequestration potential on U.S. agricultural topsoils, Soil & Tillage Research, [DOI](http://doi.org/10.1016/j.still.2015.09.006)

Spokas (2010) Review of the stability of biochar in soils: predictability of O:C molar ratios, Carbon Management, [DOI](https://doi.org/10.4155/CMT.10.32)

Swan et al. (2015) COMET-Planner: Carbon and Greenhouse Gas Evaluation for NRCS Conservation Practice Planning, USDA Natural Resources Conservation Service

Werner et al. (2018) Biogeochemical potential of biomass pyrolysis systems for limiting global warming to 1.5 ◦C, Environmental Research Letters, [DOI](https://doi.org/10.1088/1748-9326/aabb0e)

Williamson et al. (2012) Ocean fertilization for geoengineering: A review of effectiveness, environmental impacts and emerging governance, Process Safety and Environmental Protection, [DOI](http://doi.org/10.1016/j.psep.2012.10.007)

Winistorfer et al. (2005) Energy Consumption And Greenhouse Gas Emissions Related To The Use, Maintence, And Disposal Of A Residential Structure, Wood and Fiber Science

Yen & Lee (2011) Comparing aboveground carbon sequestration between moso bamboo (Phyllostachys heterocycla) and China fir (Cunninghamia lanceolata) forests based on the allometric model, Forest Ecology and Management, [DOI](https://doi.org/10.1016/j.foreco.2010.12.015)

Zeng (2008) Carbon sequestration via wood burial, Carbon Balance and Management, [DOI](https://doi.org/10.1186/1750-0680-3-1)

### Additional references

Fargione et al. (2018) Natural climate solutions for the United States, Science Advances, [DOI](https://doi.org/10.1126/sciadv.aat1869)

Keith et al. (2018) A Process for Capturing CO2 from the Atmosphere, Joule, [DOI](https://10.1016/j.joule.2018.05.006.)

Kelemen et al. (2018) In situ carbon mineralization in ultramafic rocks: Natural processes and possible engineered methods, Energy Procedia, [DOI](https://doi.org/10.1016/j.egypro.2018.07.013)

Keleman et al. (2020) Engineered carbon mineralization in ultramafic rocks for CO2 removal from air: Review and new insights, Chemical Geology, [DOI](https://doi.org/10.1016/j.chemgeo.2020.119628)

Mulligan et al. (2020) CarbonShot: Federal Policy Options for Carbon Removal in the United States, World Resources Institute, [DOI](https://www.wri.org/publication/carbonshot-federal-policy-options-for-carbon-removal-in-the-united-states)

Pan et al. (2011) A Large and Persistent Carbon Sink in the World's Forests, Science, [DOI](https://doi.org/10.1126/science.1201609)

NAS (National Academies of Sciences, Engineering, and Medicine) (2018) Negative Emissions Technologies and Reliable Sequestration: A Research Agenda, [DOI](https://doi.org/10.17226/25259)

Smith et al. (2015) Biophysical and economic limits to negative CO2 emissions, Nature Climate Change, [DOI](https://doi.org/10.1038/nclimate2870)