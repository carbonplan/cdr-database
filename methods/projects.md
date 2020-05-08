# Projects

Here we provide detailed methods for particular projects evaluations, as a supplement to the metrics and comments available in our public database. Projects are organized by the program in which they were solicited. We do not exhaustively list methods for every metric for every project, but rather highlight specific considerations made or calculations performed. Here and elsewhere, our primary focus is evaluating the scientific plausibility and credibility of claims made in project proposals.

### Stripe Climate 2020

Description of program

### Climeworks (STRP01)

The reported volume of 50t CO2 / year is based on a small pilot plant in Iceland commissioned in 2017. We used a back of the envelope calculation to evaluate the plausibility of this number. ClimeWorks claims they use amine sorbents. Assuming an adsorption capacity of 2 mmol CO2 / g (Jones et al., 2016), a range of 4-6 cycles per day, and a range of 200-500 kg or sorbent, yields sequestration volumes of approximately 25-70t CO2 / year, making the estimate highly plausible.

### STRP02 (CarbonCure)

The CarbonCure process utilizes CO2 for mineralization in building materials. At least in its current deployments, the CO2 is sourced from an industrial CO2 waste stream (as stated in their LCA: “Carbon dioxide is captured from the air from a by-product or waste stream of an industrial process.”) For this reason, from a lifecycle perspective, its entire volume represents avoided emissions, not carbon removal, even though the same technology when coupled to, say, a direct air capture facility would constitute a carbon removal system.

### Nori Harborview Farms (STRP03)

Evaluating the claimed 14k CO2 volume for this project is difficult due to a lack of information. Nori does provide on its project page the locations and NRTs (claimed sequestered volume) associated with each plot. However, Nori specifies in its Croplands Methodology a range of possible practices that farmers might adopt to increase soil carbon sequestration, including “changing or expanding crop rotations and cropping intensity, introducing cover crops and/or shifting from annuals to perennials, reducing tillage events and intensity and/or adopting new residue management techniques, adopting new irrigation management techniques, or substituting synthetic fertilizers with organic matter additions”. Without knowing the specific mechanisms applied in each plot, it is difficult to estimate a range of potential sequestration rates. Nori itself provides a range of 0.5 to 7.4 tCO2 / ha / year as plausible, and examples in the literature for at least some practices fall within that range, e.g. 1.17 tCCo2 / ha /  yr for cover cropping (Poeplau and Don, 2011).

To compare this range to the actual projects, we inspected a subset of four projects. While shape files were not directly provided, we used a web tool to approximately recreate four plots and estimate their area (Crewe II-1, Colchester 12, Ernies, Elder 1234), and then used the reported sequestration volumes to estimate rates of 6-11 tCO2 / ha. These would be implausibly high if meant to reflect one year, but Nori’s methodology suggests that this may be a pilot project, in which the claims credits reflect multiple years of sequestration. Thus, we remain uncertain as to the plausibility of the volumes.

### IndigoAg (STRP04)

The reported volume of 550k tCO2 / year would correspond to approximately 0.5M ha across participating farms. But lacking specific details on which practices would be adopted in which locations, or on the likely level of participation, it is difficult to judge the plausibility of the overall volume.

### Biorecro (STRP05)

### Carbo Culture (STRP06)

The reported volume is 62t CO2. Given the stated C fraction of 85%, this corresponds to a C volume of 16.9 tC. A ratio of O:C of 0.08 corresponds approximately to a half life of 1000 years. Assuming a first order exponential decay with a half life of 1000 yields a decay constant of k = log(2) / 1000 = 0.00069. The biochar will reach 99% of its volume in 14 years, 90% of its volume in 152 years, and 80% in 321 years, using the equation -log(f)/k where f is the fraction. Expressed another way, the volume would need to be 0.69% higher to yield the stated volume at 10 years, 3.52% higher at 50 years, 7.1% higher at 100 years, and 41% higher at 500 years, 100% higher at 1000 years, using the equation 1 / exp(-k * t) where t is the number of years.

### Droneseed (STRP07)

Project reports a volume of 510 tCO2 in the first year (2020) and 64,031 tCO2 over 100 years for a size of  211 ha. These numbers exactly match the values in USFS yield tables assuming Ponderosa Pine in the Pacific Northwest, East region and starting from a stand age of 0 (CITE). Given that this is previously burned land and thus will primarily involve new forestation, using these numbers directly is appropriate.

### Pachama Rip's Redwoods and Guanare (STRP08)

Project directly reports rates of 16 tCO2 / ha / year for the Rip’s Redwoods development, and 26 tCO2 / ha / year for Guanare. The Rip’s Redwoods appears to be a mix of douglas fir and coastal redwoods. Values in USFS yield tables for douglas fir in the Pacific Northwest are as high as 11.56 tCO2 / ha / yr over a 20 year, so the reported rate is high but not completely implausible. A more accurate estimate would incorporate stand age, which was not provided, so as to estimate location on the growth curve. Need info on eucalyptus in Guanare... 

### Ocean-based Climate Solutions (STRP09)

### Soil Value Exchange (STRP10)

### GreenSand (STRP11)

### SilviaTerra (STRP12)

### Breadtree Farms (STRP13)

Project claims a range of 56 tCO2 to 140 tCO2 over the 4.9 ha they are adding to the project, reflecting both the planting of new chestnut trees and changing in grazing practices to increase soil carbon sequestration. The low end estimate is based on COMET-Farms and the high end estimate is based on (CITE). The low end rate is 11 tCO2 / ha, which if it reflects both above ground biomass growth and soil, is not unreasonable. Needs rates for chestnut… But it is difficult to validate the soil component without more details.

### Ecoera (STRP14)

### Finnish Log House Industry Association (STRP15)

### Ekovilla (STRP16)

### Carbofex (STRP17)

### Vandersanden (STRP18)

### Future Forest (STRP19)

For a 174 ha land project in Scotland, project claims a breakdown of total volume as including 18.3 - 25.7 tCO2 / ha / year for above ground biomass, 7.3 - 25.7 tCO2E / ha / year for soil carbon, and 11 - 22 tCO2 / ha / year for biochar. For comparisons for the forest component, published estimates in the US based on USFS yield tables range from 1.14 tCO2 / ha / yr to 11.56 tCO2 / ha / yr (CITE). A UK report referenced by the project provides a range of 5-20 tCO2 / ha / yr as peak growth rates (CITE), but without referencing primary literature. Thus, the claimed rates seem high but not implausible.

### Carbon Sequestration Inc (STRP20)

### Bluesource Doe Mountain (STRP21)

Claimed volume is based both on the standing stock (in the form of avoided emissions) and future growth.The reported volume is 167 tCO2 / ha for the standing stock and 2.2 - 4.5 tCO2 / ha / year for growth. Given the location and the species (mix of hardwoods, oak-hickory, cove forest, and oak-pine), both numbers are commensurate with values from USFS yield tables (CITE). 

### Rizome (STRP22)

Reported volume is based on a 1,000 ha pilot. The total volume includes both 15,680 tCO2 via reforestation with giant bamboo (Dendrocalamus asper) and 4,020 tCO2 based on storage of existing culms. For the reforestation component, for the first year of growth, that corresponds to 15.7 tCO2 / ha / year. Published literature on a related species of giant bamboo reports rates of 29.8 tCO2 / ha / year, so these estimates are clearly commensurate.

### Project Vesta (STRP23)

### Charm Industrial (STRP24)


