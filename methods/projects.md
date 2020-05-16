# Projects

Here we provide detailed methods for projects we have analyzed. All analysis and evaluation is based on information provided in public project proposals plus our own research. We do not exhaustively list methods for every metric for every project, but rather highlight specific considerations made or calculations performed. 

Here and elsewhere, our primary focus is analyzing and independently validating scientific plausibility and credibility. We work entirely independently of organiztions soliciting project proposals. Our hope is that sharing data and insights can benefit the field as a whole, and complement the work of the inventors, scientists, entrepreneurs, and activists who are making climate solutions a reality. 

## Biorecro

Validation was challenging for this project due to the lack of specific details on projects. Biorecro appears to be a broker that facilitates late-stage BECCS projects. While BECCS is an established technology (Fuss et al., 2018), its key parameters, in particular volume, negativity, and permanence, rely on the details of both the bioenergy feedstock and the mechanisms for capturing and sequestering emissions produced during bioenergy production. Insofar as Biorecro works with several projects, without further details on specific projects, it is difficult to validate most of its claims.

## Breadtree Farms

Project claims a range of 56 tCO2 to 140 tCO2 in the first year over the 4.9 ha they are adding to the project, reflecting both the planting of new chestnut trees and changes to grazing practices to increase soil carbon sequestration. While this estimate is based on 1 year, one could potentially extrapolate to a volume of 1680 tCO2 for the 30 year duration of the problem. The low end estimate is based on COMET-Farms and the high end estimate is based on Eric Toensmeier's The Carbon Farming Solution. The low end volume would correspond to a carbon accrual rate of 11.42 tCO2 / ha / year. As points of comparison from similar forest type groups, afforestation rates from USFS yield tables for live tree carbon stocks are 5.43 tCO2 / ha / yr for Maple  / Beech / Birch in the Northeast and 5.06 tCO2 / ha / yr for Oak  / Hickory in the Northeast (Smith et al., 2005) ( annual rate based first 5 yr of growth). The provided volume number thus appears high if it only reflects above ground biomass. However, a range of farming practices are planned, including changes to grazing practices, and the claimed volume also likely includes soil carbon sequestration related to these changes in practice. COMET-Farms was used for these estimates, but we are unable to validate how it was used or parameterized. This uncertainty is further reflected in our uncertainty in the life cycle analysis and negativity, alongside questions around methane emissions from livestock.

## Bluesource Doe Mountain

Claimed volume is based both on the standing stock (in the form of avoided emissions) and future growth over an area of 3,433.83 ha over a 20 year project duration. Based on the table provided in the project proposal, the total claimed volume includes 166.65 tCO2 / ha for the standing stock (ignoring the buffer pool deduction) and 2.89 tCO2 / ha / yr for growth (assuming 20 yrs). Given the location and the species (mix of Hardwoods, Oak / Hickory, Cove forest, and Oak / Pine), we can validate against USFS yield tables. For example, growth rates range from 4.3 tCO2 / ha / yr (years 70-90) to 7.3 tCO2 / ha / yr (years 0-20) for Oak / Hickory in the Southeast, with a standing stock ranging from 77.1 - 351.6 tCO2 / ha (for stand ages 10 - 50 yrs), and growth rates range from 3.7 tCO2 / ha / yr (years 70-90) to 7.2 tCO2 / ha / yr (years 0-20) for Oak / Pine in the Southeast, with a standing stock ranging from 72 - 326.3 tCO2 / ha (for stand ages 10 - 50 yrs) (Smith et al., 2005). While we do not know stand ages or ranges, the provided volume numbers fall well within these ranges.

## Carbo Culture

The reported volume is 62 tCO2. Given the stated C fraction of 85%, this corresponds to a C volume of 16.89 tC. The stated composition ratio of O:C of 0.08 corresponds approximately to a half life of 1000 years. Assuming a first order exponential decay with a half life of 1000 yields a decay constant of k = log(2) / 1000 = 0.00069. 90% of the biochar volume will remain in 152 years via the equation -log(0.9)/k, so consistent with biochar projects, we express the permanence as 152 years, and the volume as 90% of 62, or 55.80 tCO2 (see [Jupyter notebook]() for details). While we consider the permanence validated, validating the volume would require knowing the decay rate of the feedstock for comparison. 

## Carbofex

The reported volume is 2500 tCO2. Given the stated C fraction of 92%, this corresponds to a C volume of 681.20 tC. The stated composition ratio of O:C of 0.021 corresponds approximately to a half life of 10000 years. Assuming a first order exponential decay with a half life of 10000 yields a decay constant of k = log(2) / 10000 = 0.00069. 90% of the biochar volume will remain in 1520 years via the equation -log(0.9)/k, so consistent with biochar projects, we express the permanence as 1520 years, and the volume as 90% of 2500, or 2250.00 tCO2  (see [Jupyter notebook]() for details). While we consider the permanence validated, validating the volume would require knowing the decay rate of the feedstock for comparison. In addition, we noted a discrepancy, whereby the referenced Puro verification reports a rate of 3.1 tCO2 stored for 1 t of biochar rather than 3.4 tCO2, which would imply a C fraction of 85% rather than 92%.

## Carbon Sequestration Inc

## CarbonCure

The CarbonCure process utilizes CO2 for mineralization in building materials. At least in its current deployments, the CO2 is sourced from an industrial CO2 waste stream (as stated in their LCA: “Carbon dioxide is captured from the air from a by-product or waste stream of an industrial process.”) For this reason, from a lifecycle perspective, its entire volume represents avoided emissions, not carbon removal, even though the same technology when coupled to, say, direct air capture, would constitute a carbon removal system.

## Charm Industrial

## Climeworks

The reported volume of 50 tCO2 / yr is based on a small pilot plant in Iceland commissioned in 2017. We used a back of the envelope calculation to evaluate the plausibility of this number. ClimeWorks claims they use amine sorbents. Assuming an adsorption capacity of 2 mmol CO2 / g (Jones et al., 2016), a range of 4-6 cycles per day, and a range of 200-500 kg or sorbent for the pilot plant, yields sequestration volumes of approximately 25-70t CO2 / yr, making the estimate highly plausible.

## Droneseed

Project reports a volume of 510 tCO2 in the first year (2020), 31027 tCO2 of 51 years, and 64031 tCO2 over 100 years for a project size of  211 ha. We report the intermediate number as 51 years is stated as the project duration. These numbers exactly match the values in USFS yield tables assuming Ponderosa Pine in the Pacific Northwest, East region and starting from a stand age of 0 (Smith et al., 2005). Given that this is previously burned land and thus will primarily involve new forest growth, using these numbers directly is appropriate and we consider the claimed volume validated.

## Ecoera

The reported volume is 5000 tCO2. Given the stated C fraction of 78%, this corresponds to a C volume of 1746.66 tC. The stated composition ratio of O:C of 0.039 corresponds approximately to a half life of 5000 years. Assuming a first order exponential decay with a half life of 5000 yields a decay constant of k = log(2) / 5000 = 0.00014. 90% of the biochar volume will remain in 760 years via the equation -log(0.9)/k, so consistent with biochar projects, we express the permanence as 760 years, and the volume as 90% of 5000, or 4500.00 tCO2 (see [Jupyter notebook]() for details). While we consider the permanence validated, validating the volume would require knowing the decay rate of the feedstock for comparison.

## Ekovilla

Regarding the life cycle analysis, similar to other building material projects, the analysis begins with sourcing the feedstock, but given that in this case the a significant component of the feedstock is itself a derived product (paper), emissions associated with its production should be included. While this may not significantly affect the resulting negativity, it remains an unknown, leaving questions as to the total value.

Regarding the permanence of these building materials, while there is existing literature on the duration of stage in traditional wood products (Hepburn et al., 2019, Lippke et al., 2011), less can be said with confidence about the blown loose wool materials produced by Ekovilla. While it is likely still longer in duration than the corresponding feedstock, we are less confident validating the claimed duration of 50 years.

## Finnish Log House Industry Association

Regarding the permanence of wooden building materials, they are generally considered to last longer than wood in forests, likely decades and possibly centuries (Hepburn et al., 2019, Lippke et al., 2011), and a detailed survey of housing in the United States found that more than half of wood-based housing stock was at least 80 years old (Winistorfer et al., 2005). Thus, we consider the lower bound of 50 reported for this project within a highly plausible range.

## Future Forest 

For a 174 ha land project in Scotland, project claims a breakdown of total volume as including 18.3 - 25.7 tCO2 / ha / yr for above ground biomass, 7.3 - 25.7 tCO2E / ha / yr for soil carbon, and 11 - 22 tCO2 / ha / yr for biochar. For the above ground biomass portion, an initial point of comparisons includes published estimates in the US based on USFS yield tables, which range from 1.14 tCO2 / ha / yr to 11.56 tCO2 / ha / yr (Fargione et al., 2018, which is itself based directly on USFS yield tables for Ponderosa Pine and Douglas-fir). An additional point of comparison comes from yield tables for Sitka Spruce in the UK, which include reports of 10 tCO2 / ha / yr to  26 tCO2 / ha / yr (Magnani et al., 2007), depending on stand age, regional conditions, and productivity. Based on these comparisons, the above ground biomass component of volume reported by the project 18.3 - 25.7 tCO2 / ha / yr is high, but not implausible. The rates for soil carbon and biochar are more difficult to validate without more specifics on planned practices, and the value for soil in particular appears high. Thus, the overall volume appears high, raising questions about, but not invalidating, the claim.

## GreenSand

A challenge with this proposal is that the time scale and exact material procurement underlying the claimed volume is not entirely clear. Based on public details from other deployments on the project website, the expected carbon removed from weathering for all GreenSand deposits since 2007 totals 306 tCO2. It is unclear whether the claimed 1000 tCO2 reflects the carbon removal expected in one year based on a new, extremely large deployment, or an amount expected over some unspecified time horizon. In general, the expected volume of carbon removal for olivine depends on the ratio of magnesium to iron, and whether weathering results in alkalization of runoff and/or formation of carbonate precipitates. The ratio of tCO2 removed per t of olivine can range from 0.61 (assuming 94% magnesium and only precipitation of carbonate minerals) to 1.25 (assuming 100% magnesium and all dissolved bicarbonates) (Montserrat et al., 2017). The life cycle analysis references a ratio of 0.75 apparently in regards to this quantity, which falls within a plausible range. But without knowing the assumed time scale or the actual volume of olivine procured, it is hard to validate the internal consistency of the reported volume.

## IndigoAg

The reported volume range of 100k to 1M tCO2 / yr corresponds to unknown modified farming practices applied to an unknown number of participating farms. If we assume, for example, practices that increase soil carbon sequestration at a rate of 1 tCO2 / ha / year, we could infer that it would be necessary for 0.5M ha of farmland across all project participants. But lacking any specifics on either dimension, it is difficult to judge the plausibility of the volume.

## Nori Harborview Farms

Evaluating the claimed 14011 tCO2 volume for this project is difficult due to a lack of information. Nori does provide on its project page the locations and NRTs (claimed sequestered volumes) associated with each plot. However, Nori specifies in its Croplands Methodology v1.1 a range of possible practices that farmers might adopt to increase soil carbon sequestration, including “changing or expanding crop rotations and cropping intensity, introducing cover crops and/or shifting from annuals to perennials, reducing tillage events and intensity and/or adopting new residue management techniques, adopting new irrigation management techniques, or substituting synthetic fertilizers with organic matter additions”. Without knowing the specific mechanisms used in each plot, it is difficult to estimate a range of potential sequestration rates. Nori itself provides a range of 0.5 to 7.4 tCO2 / ha / yr as plausible in its Croplands Methodology, and examples in the literature for at least some practices fall within that range, e.g. 1.17 ±  0.29 tCO2 / ha /  yr for cover cropping (Poeplau and Don, 2011).

To compare this range to the actual projects, we inspected a subset of four projects. While shape files were not directly provided, we used a [web tool](https://www.mapdevelopers.com/area_finder.php) to approximately estimate four plot areas (Crewe II-1, Colchester 12, Ernies, Elder 1234), and then used the reported sequestration volumes to estimate rates of 6-11 tCO2 / ha / yr. These would be rather high if meant to reflect one year, but Nori’s methodology suggests that this may be a pilot project, in which the claims credits reflect multiple years of sequestration. Thus, we remain uncertain as to the plausibility of the claimed volumes.

## Ocean-based Climate Solutions

## Pachama Rip's Redwoods and Guanare

Project directly reports rates of 16 tCO2 / ha / yr for the Rip’s Redwoods development, and 26 tCO2 / ha / yr for Guanare. The total volume estimates are then based on these rates projected over the project durations of 60 and 100 years for the two projects, respectively. The Rip’s Redwoods appears to be a mix of Douglas Fir and Coastal Redwoods. Values in USFS yield tables for Douglas Fir in the Pacific Northwest are as high as 11.56 tCO2 / ha / yr over a 20 year period (Smith et al., 2005), so the reported rate is very high but not implausible. A more accurate estimate would incorporate stand age, which was not provided, so as to better estimate current growth rates. The Guanare project appears to include mainly eucalyptus, which has published growth rates of 5.02 to 27.65 tCO2 / ha / yr over an initial 3 years of growth (Ahimana & Maghembe, 1987), so the reported rate is again high but not implausible, but validation would require incorporating stand age.

In terms of permanence risk, we have not specifically analyzed fire risk for the Guanare project but it is stated by the project as high. Risk for Rip’s Redwoods given its coastal location is likely low to moderate (Anderegg et al., in publication). Questions around permanece on the provided time horizon have more to do with socioeconomic risks such as default or bankruptcy.

## Project Vesta

Reported volume is based on an assumption of 1.25 tCO2 removed per 1 tCO2 of olivine. With that ratio, the volume of 200 tCO2 would correspond to 160 t of olivine, which if procured, would yield the given volume. 

The ratio of 1.25 is likely an upper bound on the actual ratio. First, significant uncertainty remains around the timescale and extent of olivine cation dissociation in ocean environments, and many factors could reduce yield. In general, for olivine weathering in ocean water, the ratio will depend on the proportion of magnesium to iron in the olivine and the ratio of bicarbonates to carbonates, which itself depends on pCO2 and alkalinity. If the proportion of magnesium to iron is 1:0 then we calculate the molar mass of olivine of 140.7 g/mol (the molar mass of Mg2SiO4). If all the ingassed CO2 is stored as bicarbonate ions, 1 mole of olivine results in 4 moles of captured carbon, yielding a ratio of 4 * 44 g/mol CO2 /  140.7 g/mol olivine = 1.25, the ratio provided in the proposal. 

However, using a more realistic ratio of magnesium to iron of 0.94:0.06 (Montserrat et al., 2017) gives a molar mass of olivine of 0.94 x 140.7 + 0.06 * 203.8 = 144.49 g/mol. And using a more realistic bicarbonate to carbonate mole ratio of 0.87:0.13 (CITE) gives a total ratio of 3.5 x 44 g/mol CO2 /  144.49 g/mol olivine = 1.09. In the limiting case where dissolution of olivine drives only precipitation of carbonate minerals, the ratio could be as low as 2 x 44 g/mol CO2 /  144.49 g/mol olivine = 0.61, but this is unlikely given the proximity to ocean water.

For the life cycle analysis, the lower ratio would also translate to a lower negativity, holding all other variables constant. A ratio of 1.09, for example, would yield a negativity of 1 - 1.06/0.049 = 0.961.

In both cases, while the reported numbers reflect an upper bound, we consider them within a plausible range. 

## Rizome

Reported volume is based on a 1000 ha pilot. The total volume includes both 15680 tCO2 via reforestation with giant bamboo (Dendrocalamus asper) and 4020 tCO2 based on storage of existing culms. For the reforestation component, for the first year of growth, that corresponds to 15.7 tCO2 / ha / yr. Published literature on a related species of giant bamboo reports rates of 29.8 tCO2 / ha / yr (Yen and Lee, 2011), so these rates seem plausible, though we could not find published yield tables for the specific species in question. In addition, given several other potential sources of variability due to regional conditions, further validation of volume would benefit require ground measurements 

## SilviaTerra

## Soil Value Exchange

## Vandersanden

The project utilizes CO2 for mineralization in building materials. At least in its current deployments, the CO2 is sourced from waste streams (as stated in their LCA). For this reason, from a lifecycle perspective, its entire volume represents avoided emissions, not carbon removal, even though the same technology when coupled to, say, direct air capture, would constitute a carbon removal system.

## References

[FILL IN]
