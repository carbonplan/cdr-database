import Table from '../components/table'
import Check from '../components/icons/check'
import Ex from '../components/icons/ex'

# Metrics

Our goal is to harmonize metrics across a range of project categories, bringing standards and shared concepts to a complex and nascent space. 

Values for each metric are based on information provided in public project proposals and our own research. We are actively developing better methods for metric calibration based on independent data and models.

The mark next to each metric shows our validation. A <Check closed={true}/> means we have independently validated the claim and  an <Ex closed={true}/> means we have reason to doubt it. In all other cases we remain uncertain and leave the entry blank. We also include notes and comments, with notes addressing information provided by projects directly and comments explaining our evaluation or interpretation of project information. As we develop better methods, and as we learn more about projects, we expect to be able to validate more claims with confidence.

Marks on metrics are only provided for Mechanism, Volume, Negativity, and Permanence. We do not provide marks on Cost. In some ways cost is self-evident because the price of the offering is set directly by the project. When expressed in terms of  $/tCO2, however, uncertainty in cost does reflect uncertainty in volume, but as we validate volume separately, we do not attempt to specifically validate the cost. 

For Additionality and Transparency we provide a coarse score from 1 to 3 and comments. For Transparency, we consider the availability of public materials itself highly transparent, so these values should be considered relative above and beyond that baseline. For Additionality, we note that its importance depends on the motivation for funding a project, and a low value does not mean a project cannot have significant positive climate benefits.

Across all metrics, our evaluation is primarily focused on validating whether claims are plausible and consistent with the best available science and data. We also strive, through our metrics, to harmonize concepts and quantities across a wide diversity of projects. This process is more straightforward for methods based on established physical or biological processes, and can pose particular challenges for proprietary industrial practices or inherently variable physical properties.

In the remainder of this document, we explain each metric in detail, and provide a table for how we arrived at evaluations for each metric.

## Mechanism

We consider Mechanism to be the basic process by which a project removes carbon dioxide from the atmosphere as indicated by the left downward arrow, and/or reduces carbon dioxide emissions as indicated by the right closed circle.

While we only consider projects in this database that have the potential to be part of a carbon removal system, some of these projects are, in their current form, only responsible for avoided emissions. For example, utilization of CO2 for storage in building materials where the CO2 is currently sourced from an industrial waste stream is avoided emissions, but would be carbon removal if sourced from direct air capture.

In general, we have challenges confidently validating early stage technologies, or projects that reference a broad variety of potential approaches but without specifics on actual implementation.

<Table 
type='icons'
three='Established carbon removal or storage technology with existing demonstrations and/or published literature on the underlying mechanisms. Ok if a component of the technology is unproven, so long as the core carbon removal or storage aspect is well established.' 
one='Proposal of future technology that violates basic physical principles or published science, or an approach that neither performs carbon removal, nor could ever be part of a carbon removal system.' 
>
</Table>

## Volume

Volume is our best estimate of the current annual carbon removal and/or avoided emissions of the project. In all cases volume is based on a public project offering. We are working on calibrating these estimates with domain-specific data-driven approaches.

Volume estimates are complicated by time scale because the volume for different projects and project categories reflect different time scales of carbon removal. Projects tend to fall into one of two categories: those that are directly estimating the amount of carbon removed through some process on an annual basis (e.g. direct air capture), and those that are performing a one time procurement of a material that will contribute to carbon removal or storage over some potentially unknown time horizon (e.g. procurement of minerals for enhanced weathering or procurement of biomass to produce biochar). Forests projects pose a challenge because they may report an annual or project lifetime depending on the context. In these cases, we simply report as faithfully as possible what projects claim (and why), but caution should be exercised when comparing volume estimates for these projects.

Note that a project with large Volume but low Negativity would not be an effective form of carbon removal or avoided emissions due to the large process emissions, so these two metrics should be considered jointly.

To evaluate Volume, we use one of two approaches. 

First, where possible, we perform an independent calculation based on third-party information to replicate the volume number, or at least show that it falls within a plausible range — for example, by consulting yield tables for forest projects, or published sorbent properties for direct air capture. Over time, we will develop more sophisticated methods and models for these calculations, which will in turn require more specific information from projects for validation.

In other cases, where the volume is primarily driven by procurement of materials for an industrial process, we try to assess whether there is enough information in public materials to show an internally consistent calculation that yields the given volume number. But this is not a verification of the ability for the project to procure the necessary materials. Rather, it’s a demonstration of internal consistency.

In many cases we were simply unable to validate volume through an indepnedent calculation or using project information. This uncertainty should not be taken as a criticism, and we hope to improve in this ability over time.

<Table 
type='icons'
three='Possible to validate claimed volume using either an independent calculation or a check for internal consistency, depending on the provided information.' 
one='Claim of substantial volume that we have credible reason to find implausible.' 
>
</Table>

## Negativity

We define Negativity as one minus the ratio of gross project emissions to gross carbon removal. Calculating Negativity depends on a life cycle assessment to quantify project emissions. If emissions are high relative to the amount of carbon removal, this value will approach 0.

Note that, for projects performing carbon dioxide storage (e.g. mineralization in concrete or pyrolysis to produce biochar) and currently sourcing CO2 from existing biogenic sources or industrial waste streams, one might reasonably think of their Negativity as low or zero, as they are currently avoiding emissions but not performing carbon removal. However, as we separately address that distinction under Mechanism, we choose here to still report a (potentially positive) Negativity based on the gross project emissions relative to the gross carbon either removed or stored.

When projects report Negativity based on a claimed volume of carbon removal that additionally includes avoided emissions due to other practices that were prevented (e.g. prevented use of alternative building materials), we recompute the ratio, if possible, to only reflect the carbon removal or carbon storage component.

Estimating Negativity requires a life cycle assessment to quantify emissions sources. This can be an abstract 'per ton' estimate based on parameters of the technology, or based on data from an instantiated project.

To evaluate Negativity, we analyze publicly provided life cycle assessment information. Where possible, we extract explicit gross total project emissions, and total volumes of carbon dioxide either removed or stored, and compute the ratio. When projects simply report a ‘per ton’ ratio, we report that instead. If boundary conditions and emission sources are specified, we summarize them.

For projects with an additional avoided removal component above and beyond the primary carbon removal or storage mechanism (e.g. emissions avoided due to less use of an alternative building material), we do not include those avoided emissions when calculating ratios.

For forest projects, for consistency, we compute Negativity over the project lifetime. Often these projects have emissions associated with the first year, but carbon removal potential that persists across a much longer duration.

We remain uncertain on this metric when either we don't know enough about the project's process, or because the technology is early stage such that an independent LCA has yet to be performed.

<Table 
type='icons'
three='Boundary conditions are well specified with respect to our understanding of the mechanism, and LCA components are thoroughly documented, either directly by the project and/or through independent assessment or verification with a third-party.' 
one='Clear misspecification of boundary conditions given the carbon removal or storage mechanism or independent evidence that claimed emissions associated with a particular process are implausible.' 
>
</Table>

## Permanence

We consider the Permanence of a project the duration over which durable carbon storage can be reasonably assured.

Our evaluation of Permanence is largely categorical, with different considerations and heuristics for natural solutions (e.g. soil and forests), solutions that involve geological, mineral, or other material storage.

For all projects, when a range is provided, we report the minimum, and all times are adjusted so that they are relative to the most recent project documents. Permanence claims equal to or greater than 1000 were recorded as 1000+.

For soil and forest projects, we separately examine physical and socioeconomic risks. Physical risks include wildfire, drought, and natural disaster. Socioeconomic risks include breaches of contract, bankruptcy, and other factors which prevent projects from continuing to provide climate benefits. When explicit contract terms are described, we consider the contract duration the duration of Permanence, even if it is lower than the number suggested by the physical risks. We consider 30 years or less a plausible maximum duration of Permanence for these projects. While somewhat arbitrary, 30 years.... 

Building materials are intermediate, as the plausible duration of Permanence depends on the material (e.g. concrete vs laminated wood). While concrete can be considered similarly permanent as mineralization, wood products are likely bounded by a range of 50-100 years (Hepburn et al., 2019; Lippke et al., 2005).

<Table 
type='icons'
three='Generally used for claimed durations of 1000+ for geologic or mineral storage, durations of XXX for biochar, durations of 50-100 for building materials, or durations of 30 or less for forests or soil projects. Requires specific description of storage mechanism or contractual arrangements.'
one='Used for significant claimed durations that fail to adequately account for known limitations of a particular technology or sector.' 
>
</Table>

## Cost

Project Cost is taken directly from public project offerings. Some costs have been modified for accounting consistency, for example, by averaging a range or ensuring that within a category (e.g. forests) costs are expressed as over the entire project duration hwere.

Costs are expressed per volume, so while the price itself is entirely set by the project and is thus arbitrary, any uncertainty associated with volume extends to the cost. Because we separately evaluate volume, we do not provide additional evaluation of project cost.

In future work we aim to build domain-specific models to assist with cost estimation (e.g. for direct air capture and mineralization), at least in cases where we can better ground cost estimates in specific project parameters.

## Additionality

Additionality refers to the causal relationship between the funds a climate project seeks and the climate benefits it claims. Establishing a connection depends on a counterfactual scenario that asks what would happen in the absence of funding. If the project will generate climate benefits but is feasible if and only if it receives payment, then the project is considered additional. If the project will likely generate climate benefits without the funding, then it is non-additional. 

Evaluating Additionality is critical but difficult because the counterfactual scenario can only be estimated, not observed — there is no “control” earth. Additionality is also dynamic: it depends on highly contextual information that can change over time, such as price spreads between different commodities.

We examine projects for contextual information around the likelihood of Additionality and provide values on a three point scale. Projects with high marginal costs or technologies without commercial markets tend have higher values. Projects with benefits that have already been promised to other parties, or where non-climate co-benefits justify their economics, have lower values.

Different organizations might have different priorities for project selection. Low values on Additionality are not a concern when the purpose of funding is to advance technology, but should be a primary consideration if the goal is to claim an emissions offset.

<Table 
type='squares'
three='Climate benefits claimed by the project are likely to be additional. This could be because the project proposes an unconventional action, has relatively high costs, or has no inherent commercial value outside of its climate benefits.'
two='Climate benefits claimed by the project might be additional, but we cannot validate with confidence. Used when the evidence on additionality is mixed, without a clear balance establishing either a finding of additionality or non-additionality.' 
one='Climate benefits claimed by the project are likely to not be additional because they are likely to occur independently from the proposed investment. This could be because the proposed activity is already commonplace or required by law; because the project has promised or could promise its climate benefits to another party; or because the climate benefits it claims are logically implied by pre-existing commitments.' 
>
</Table>

## Specificity

Specificity reflects whether there is enough detailed information in project proposals, publications, or other materials for us to validate our metrics. All entries in this database are based off public proposals, which provides a baseline level of information. This metric is relative above and beyond that baseline.

The utility of different information depends on the project category, but can include: specific project parameters (locations, practices), specific technology components, peer-reviewed publications, third-party verifications, and any datasets or models used for project quantification or life cycle assessment.

In considering Specificity, we appreciate there can be sensitivity around proprietary and private information, including intellectual property for technology, or information about land owners and existing business practices. A low value on Specificity does not necessarily mean a carbon removal strategy cannot be effective, but it does place extra burden on the measurement and verification of its efficacy. 

In general, we encourage sharing as many details as possible, as we believe making specific project information more public and transparent can help the field develop new and better solutions, and can help organizations make better decisions when selecting projects.

<Table 
type='squares'
three='Project either uses an established approach and full specific details on implementaiton can be obtained, or uses an early-stage approach but makes extensive details available eabout the planned implementation and is grounded in existing data and research.'
two='Project uses an established approach but few details are available about the specifics of its implementation, or describes a new approach but without details on its plan.' 
one='Critical project data needed for validation cannot be obtained. Key pieces of third-party verification in progress but not yet available.' 
>
</Table>
