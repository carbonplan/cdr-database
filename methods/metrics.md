import Table from '../components/table'
import Check from '../components/icons/check'
import Question from '../components/icons/question'
import Ex from '../components/icons/ex'
import Exclamation from '../components/icons/exclamation'

# Metrics

## Overall

Metrics are based on information provided in public project offerings plus our own research. We are actively developing methods for metric calibration based on independent data and models.


Across all metrics, our evaluation is primarily focused on validating whether claims are plausible and consistent with the best available science and data. We also strive, through our metrics, to harmonize concepts and quantities across a wide diversity of projects. This process is more straightforward for methods based on established physical or biological processes, and can pose challenges for proprietary industrial practices or inherently variable physical properties.

In the remainder of this document, we explain each metric in detail, and provide a table for how we arrived at evaluations for each metric.

## Mechanism

We consider Mechanism to be the basic process by which a project removes carbon dioxide from the atmosphere as indicated by the left downward arrow, and/or reduces carbon dioxide emissions as indicated by the right closed circle.

While we only consider projects in this database that have the potential to be part of a carbon removal system, some of these projects are, in their current form, only responsible for avoided emissions. For example, utilization of CO2 for storage in building materials where the CO2 is currently sourced from an industrial waste stream is avoided emissions, but would be carbon removal if sourced from a direct air capture facility.

<Table 
type='icons'
three='Established carbon removal or storage technology with existing demonstrations and/or published literature on the underlying mechanisms. Ok if a component of the technology is unproven, so long as the core carbon removal or storage aspect is well established.' 
two='Early stage technology, or project that references a broad variety of potential approaches but without specifics on actual implementation. Only indicates that we felt unable to independently validate the mechanism with confidence.' 
one='Proposal of future technology that violate basic physical principles or published science, or an approach that neither performs, nor could ever be part of, a carbon removal system.' 
>
</Table>

## Volume

Volume is our best estimate of the current annual carbon removal and/or avoided emissions of the project. In all cases volume is based on a public project offering. We are working on calibrating these estimates with domain-specific data-driven approaches.

Note that a project with large Volume but low Negativity would not be an effective form of carbon removal or avoided emissions due to the large process emissions, so these metrics should be considered together.

To evaluate Volume, we use one of two approaches. 

First, where possible, we perform an independent calculation based on third-party information to replicate the volume number, or at least show that it falls within a plausible range — for example, by consulting yield tables for forest projects, or published sorbent properties for direct air capture. Over time, we will develop more sophisticated methods and models for these calculations, which will in turn require more specific information from projects for validation.

In other cases, where the volume is primarily driven by procurement of materials for an industrial process, we try to assess whether there is enough information in public materials to show an internally consistent calculation that yields the given volume number. But this is not a verification of the ability for the project to procure the necessary materials. Rather, it’s a demonstration of internal consistency.

<Table 
type='icons'
three='Possible to validate claimed volume using either an independent calculation or a check for internal consistency, depending on the provided information.' 
two='Not possible to validate using through either an independent calculation or based on project information, but no reason to find the claim implausibility. Indicates a lack of information or ability on our part, and should not be taken as a criticism.' 
one='Claim of substantial volume that we have credible reason to find implausible.' 
>
</Table>

## Negativity

We define negativity as one minus the ratio of gross project emissions to gross carbon removal. If emissions are high relative to the amount of carbon removal, this value will approach 0.

Estimating negativity requires a life cycle assessment to quantify emissions sources. This can be an abstract 'per ton' estimate based on parameters of the technology, or based on data from an instantiated project.

To evaluate negativity, we analyze publicly provided life cycle assessment information. Where possible, we extract explicit gross total project emissions, and total volumes of carbon dioxide either removed or stored, and compute the ratio. When projects simply report a ‘per ton’ ratio, we report that instead. If boundary conditions and emission sources are specified, we summarize them.

For projects with an additional avoided removal component above and beyond the primary carbon removal or storage mechanism (e.g. emissions avoided due to less use of an alternative building material), we do not include those avoided emissions when calculating ratios.

For forest projects, for consistency, we compute negativity over the project lifetime. Often these projects have emissions associated with the first year, but carbon removal potential that persists across a much longer duration.

<Table 
type='icons'
three='Boundary conditions are well specified with respect to our understanding of the mechanism, and LCA components are thoroughly documented, either directly by the project and/or through independent assessment or verification with a third-party.' 
two='At least some aspect is difficult to validate, either because project does not provide sufficient detail about their process, or because the technology is early stage such that an independent LCA has yet to be performed based on an instantiated project, but the provided information based on a theoretical deployment is well specified.' 
one='Claims of high negativity without any demonstration or evidence, clear misspecification of boundary conditions given the carbon removal or storage mechanism, or independent evidence that claimed emissions associated with a particular process are implausible.' 
>
</Table>

## Permanence

We consider the permanence of a project the duration over which durable carbon storage can be reasonably assured.

Our evaluation of permanence is largely categorical, with different considerations and heuristics for natural solutions (e.g. soil and forests) and solutions that involve geological or mineral storage.

For all projects, when a range is provided, we report the minimum, and all times are adjusted so that they are relative to the most recent project documents. Permanence claims equal to or greater than 1000 were recorded as 1000+.

For soil and forest projects, we separately examine physical and socioeconomic risks. Physical risks include wildfire, drought, and natural disaster. Socioeconomic risks include breaches of contract, bankruptcy, and other factors which prevent projects from continuing to provide climate benefits. When explicit contract terms are described, we consider the contract duration the duration of permanence, even if it is lower than the number suggested by the physical risks. We consider 30 years or less a plausible maximum duration of permanence for these projects. While somewhat arbitrary, 30 years.... 

Building materials are intermediate, as the plausible duration of permanence depends on the material (e.g. concrete vs laminated wood). While concrete can be considered similarly permanent as mineralization, wood products are likely bounded by a range of 50-100 years [CITE].

<Table 
type='icons'
three='Generally used for claimed durations of 1000+ for geologic or mineral storage, durations of XXX for biochar, durations of 50-100 for building materials, or durations of 30 or less for forests or soil projects. Requires specific description of storage mechanism or contractual arrangements.'
two='Used for claimed durations for forests or soil projects greater than 30 years with there is uncertainty as to the physical or reversal risks, or claims of long durations for other project types where specifics around mechanism are not provided, even if the range is plausible given the technology or sector.' 
one='Used for long claimed durations that fail to adequately account for known limitations of a particular technology or sector.' 
>
</Table>

## Cost

Project Cost is taken directly from public project offerings.Some costs have been modified for accounting consistency, for example, by ensuring that within a category (e.g. forests) costs are expressed as over the entire project duration.

Costs are expressed per volume, so while the price itself is entirely set by the project and is thus arbitrary, any uncertainty associated with volume extends to the cost. Because we separately evaluate volume, we do not provide additional evaluation of project cost.

For context (but not as validation), we specify in our comments whether costs are commensurate with recent literature reviews, in particular the [National Academies report]() and the [WRI Carbon Shot report]().

In future work we aim to build domain-specific models to assist with cost estimation (e.g. for direct air capture and mineralization), at least in cases where we can better ground cost estimates in specific project parameters.

## Additionality

Additionality refers to the causal relationship between the funds a climate project seeks and the climate benefits it claims. Establishing a connection depends on a counterfactual scenario that asks what would happen in the absence of funding. If the project will generate climate benefits but is feasible if and only if it receives payment, then the project is considered additional. If the project will likely generate climate benefits without the funding, then it is non-additional. 

Evaluating additionality is critical but difficult because the counterfactual scenario can only be estimated, not observed — there is no “control” earth. Additionality is also dynamic: it depends on highly contextual information that can change over time, such as price spreads between different commodities.

We examine projects for contextual information around the likelihood of additionality and rank them on a three point scale. Projects with high marginal costs or technologies without commercial markets tend to score well. Projects with benefits that have already been promised to other parties, or where non-climate co-benefits justify their economics, tend to score poorly.

We are mindful that different organizations might have different priorities for project selection. Low scores on additionality are not a concern when the purpose of funding is to advance technology, but should be a primary consideration if the goal is to claim an emissions offset.

<Table 
type='squares'
three='.'
two='.' 
one='.' 
>
</Table>

## Transparency

The transparency score reflects the degree to which project information is publicly available, including the project application itself, and also in external resources or peer-reviewed publications. The utility of different materials depends on the project category, but can include: specific project parameters (locations, practices), specific technology components, peer-reviewed publications, third-party verifications, and any datasets or models used for project quantification or life cycle assessment.

In considering transparency, we appreciate there can be sensitivity around proprietary and private information, including intellectual property for technology, or information about land owners and existing business practices. A low score on transparency does not necessarily mean a carbon removal strategy cannot be effective, but it does place extra burden on the measurement and verification of its efficacy. 

In general, we believe more transparency can help the field develop new and better solutions, and can help organizations make better decisions when selecting projects.

<Table 
type='squares'
three='Project either uses an established approach and provides full details on its specific implementation, or uses an early-stage approach but provides substantial information about the planned implementation and is grounded in existing data and research.'
two='Project uses an established approach but provides few details about the specifics of its implementation, or describes a new approach but without details on its plan.' 
one='Few or no details on specific project plans. Critical project data that would be useful for validation are missing. Key pieces of third-party verification in progress but not yet available.' 
>
</Table>
