import Table from '../components/methods/table'
import InlineCheck from '../components/methods/inline-check'

export const meta = {
  revised: '05-26-2021',
}

# Metrics

Our goal is to harmonize metrics across a range of project categories, bringing standards and shared concepts to a complex and nascent space.

Values for each metric are based on information provided in public project proposals and our own research. We are actively developing better methods for metric calibration based on independent data and models.

The mark next to each metric shows our validation. We assigned projects a <InlineCheck /> when we could validate a claim with reasonable confidence. Where we didn’t feel confident about validating claims, we left the entry blank, generally erring on the side of caution and respectfulness. The absence of a <InlineCheck /> should not necessarily be interpreted as a criticism of the project, though it may indicate concerns that could be resolved with more information. As we develop better methods, and as we learn more about projects, we expect to be able to validate more claims with confidence, and we may introduce new metrics. We also include “notes” and “comments”, with notes addressing information provided by projects directly and comments explaining our evaluation or interpretation of project information.

It is important to note that our validation is dependent on access to specific project information, as well as relevant science and data. Validation may therefore reflect underlying biases, such as geographic inequities in publicly accessible science and data, or differences in the information solicited from projects by specific RFPs.

Validation on metrics is only provided for mechanism, volume, negativity, and permanence. We do not provide validation on cost. In some ways price is self-evident because the price of the offering is set directly by the project. When expressed in terms of $/tCO₂, however, price also reflects uncertainty in volume. Because we validate volume separately, we do not attempt to specifically validate the price.

For additionality and specificity we provide a qualitative score from 1 to 3, along with comments. Both of these scores are contextual. Additionality is less important when funding decisions are oriented around encouraging innovation, rather than carbon offsetting. For specificity, our scores should be interpreted in light of the fact that all projects in our database have provided a baseline level of information, and achieved a significant degree of transparency, by making materials public.

Across all metrics, our evaluation is primarily focused on validating whether claims are plausible and consistent with the best available science and data. We also strive, through our metrics, to harmonize concepts and quantities across a wide diversity of projects. This process is more straightforward for methods based on established physical or biological processes, but can pose particular challenges for proprietary industrial practices or inherently variable physical properties.

After analyzing each metric separately for validation, we reflect our overall confidence in project claims with a single score on a scale from 1 to 5. Validation of mechanism, volume, negativity, or permanence, or a perfect score on additionality, each add 1 to the total.

In the remainder of this document, we explain each metric and the overall project rating in detail.

## Mechanism

A project’s mechanism is its fundamental interaction with the global carbon cycle. A project that removes CO₂ from the atmosphere will feature a downward arrow on the left-hand side of the metric and the abbreviation CDR. A project that reduces or avoids carbon dioxide emissions — for example, by storing it in a more permanent form — will feature a closed circle on the right-hand side of the metric and the abbreviation AVD. In the case where a proposal offers only carbon storage (but not avoided emissions or carbon removal), we indicate the mechanism as N/A.

While we only consider projects in this database that have the potential to be part of a carbon removal system, some of these projects are, in their current form, only responsible for avoided emissions. For example, utilization of CO₂ for storage in building materials where the CO₂ is currently sourced from an industrial waste stream currently constitutes an avoided emissions process, but would constitute carbon removal if its CO₂ were sourced from direct air capture or biological sources.

In general, a project’s mechanism should be well-specified. The challenge of validation can be more significant, however, when a project involves early-stage technologies or references a broad variety of potential approaches without specifics about which ones are used.

In the case where a proposal offers only one type of carbon benefit (e.g. only carbon removal) from a project that produces both carbon removal and avoided emissions, mechanism reflects the mechanisms of the project as a whole.

<Table
  type='icons'
  three='Established carbon removal or storage technology or practice with existing demonstrations and/or published literature on the underlying mechanisms. The fact that a  component of the technology might not be proven is acceptable, so long as the core carbon removal or storage aspect is well established.'
></Table>

## Volume

Volume estimates almost all come directly from project applications, and are stated in metric tCO₂. In a few cases, volume is specified in a way that can’t easily be compared with other projects, and can potentially be normalized.

Volume estimates are complicated by time scale because the volume for different projects and project categories reflect different time scales of carbon removal. Projects tend to fall into one of two categories: those that are directly estimating the amount of carbon removed through some process on an annual basis (e.g. direct air capture), and those that are performing a one-time procurement of a material that will contribute to carbon removal or storage over some potentially unknown time horizon (e.g. procurement of minerals for enhanced weathering or procurement of biomass to produce biochar). Forests projects pose a challenge because they may report an annual or project lifetime depending on the context. In these cases, we simply report as faithfully as possible what projects claim (and why), but caution should be exercised when comparing volume estimates for these projects.

If there is uncertainty about whether the offered volume is a gross or net volume, we conservatively interpret it to be a gross volume and attempt validation accordingly.

We use one of two approaches to validate volume.

First, where possible, we perform an independent calculation based on third-party information to replicate the project’s claimed volume number, or at least show that it falls within a plausible range — for example, by consulting yield tables for forest projects, or published sorbent properties for direct air capture. Over time, we will develop more sophisticated methods and models for these calculations, which will in turn require more specific information from projects for validation.

In other cases, where the volume is primarily driven by procurement of materials for an industrial process, we try to assess whether there is enough information in public materials to show an internally consistent calculation that yields the given volume number. But this is not a verification of the ability for the project to procure the necessary materials. Rather, it’s a demonstration of internal consistency.

In many cases we were unable to validate volume through an independent calculation or using project information, either because we lacked sufficient detail to parameterize an otherwise well-specific proposal, or because we were unable to replicate broad claims with simple models. Where possible, we indicated in our comments what additional information would be useful. A lack of validation on volume should not necessarily be taken as criticism, and we hope to improve in this ability over time.

Key details needed to validate forest project volumes include project area, forest type, claimed standing stock, and claimed growth rate. For forest projects that include timber production, harvesting cycles must also be clearly communicated. For soil projects, key details include project area, specificity around interventions claimed to produce climate benefits, and a clear methodology for modeling or measuring changes in soil organic carbon. For biomass projects, key details include feedstock, annual production capacity, and claimed rate of sequestration per unit of transformed biomass. For DAC projects, key details needed include sorbent or solvent technology, project removal capacity, and clarity around the fate of captured CO2. For mineralization projects, key details needed include exchange material(s), claimed exchange rate(s), and some combination of claimed time bounds or exchange material volume bounds. Ocean projects are diverse and analyzed on a case by case basis.

<Table
  type='icons'
  three='Possible to validate claimed volume using either an independent calculation or a check for internal consistency, depending on the provided information.'
></Table>

## Negativity

Negativity reflects the emissions intensity of different carbon removal solutions, and we define it as 1 minus the ratio of gross project emissions to gross climate benefits, including carbon removal and storage. Calculating negativity depends on a life cycle assessment that quantifies project emissions and climate benefits. If emissions are low relative to the climate benefits, this metric will approach 1.

As discussed above under mechanism, the concept of “climate benefits” is complicated because some projects directly remove CO₂ (and thus contribute “gross removal”) but others primarily avoid and store CO₂ emissions (and thus contribute “gross storage”). For example, a project that mineralizes CO₂ sourced from industrial waste streams is primarily avoiding emissions, rather than directly removing CO₂. We call the CO₂ it mineralizes its “gross storage.” Similarly, a project that produces biochar from biogenic materials is not directly removing CO₂ from the atmosphere, but is rather avoiding biogenic CO₂ emissions. We would calculate the carbon embedded in biochar as the project’s “gross storage” for the purposes of the negativity metric.

When projects report negativity based on volume that also includes avoided emissions due to other practices that were prevented (e.g. prevented use of alternative building materials), we recompute the ratio, if possible, to only reflect the carbon removal or carbon storage component.

Estimating negativity requires a life cycle assessment to quantify emissions sources and sinks. This can be an abstract 'per ton' estimate based on parameters of the technology, or based on data from an instantiated project.

To evaluate negativity, we analyze publicly provided life cycle assessment information. Where possible, we extract explicit gross project emissions, and gross volumes of carbon dioxide either removed or stored, and then compute the ratio. When projects simply report a ‘per ton’ ratio, we report that instead. If boundary conditions and emission sources are specified, we summarize them.

For projects with an additional avoided removal component above and beyond the primary carbon removal or storage mechanism (e.g. emissions avoided due to less use of an alternative building material), we do not include those avoided emissions when calculating ratios.

For forest projects, for consistency, we compute negativity over the project lifetime. Often these projects have emissions associated with the first year, but carbon removal potential that persists across a much longer duration.

We express no judgment on this metric when we don't know enough about the project's process to independently confirm a claim.

<Table
  type='icons'
  three='Boundary conditions are well specified with respect to our understanding of the mechanism, and LCA components are thoroughly documented. For solutions which may or may not achieve net-negativity depending on their emissions, LCA documentation includes an independent assessment or verification by a third party. For other solutions, LCA documentation is provided either directly by the project and/or through independent assessment or verification with a third-party.'
></Table>

## Permanence

We consider the permanence of a project the duration over which durable carbon storage can be reasonably assured, in years.

Our evaluation of permanence is largely categorical, with different considerations and heuristics for natural solutions (e.g. soil and forests), solutions that involve geological, mineral, or other physical storage materials.

For all projects, when a range is provided, we report the minimum. All times are adjusted so that they are relative to the most recent project documents. Permanence claims equal to or greater than 1000 were recorded as 1000+.

For soil and forest projects, we separately examine physical and socioeconomic risks. Physical risks include wildfire, drought, and natural disaster. Socioeconomic risks include breaches of contract, bankruptcy, and other factors which prevent projects from continuing to provide climate benefits. When explicit contract terms are described, we consider the contract duration the duration of permanence, even if it is lower than the number suggested by the physical risks.

We consider 30 years or less a plausible maximum duration of permanence for projects managing socioeconomic risks, especially involving forests and soil. While somewhat arbitrary, 30 years offers a useful threshold because it is the maximum term length of residential mortgages in the United States, and therefore represents an upper-bound on the length of private contracts in a real-world financial market.

Building materials are intermediate, as the plausible duration of permanence depends on the material (e.g. concrete vs laminated wood). While concrete can be considered similarly permanent as mineralization, wood products are likely bounded by a range of 50-100 years (Hepburn et al., 2019; Lippke et al., 2005).

<Table
  type='icons'
  three='Generally used for claimed durations of 1000+ years for geologic or mineral storage,  durations of 100-1000 years for biochar, durations of 50-100 years for wooden building materials, or durations of 30 or fewer years for forests or soil projects. Requires specific description of storage mechanism or contractual arrangements.'
></Table>

## Price

Project price is taken directly from public project offerings. Some prices have been modified for accounting consistency, for example, by averaging a range or ensuring that within a category prices are expressed in relation to climate benefits expected over the entire project duration (e.g. for forest projects).

<!-- prettier-ignore -->
Prices are expressed per metric tCO₂ and thus, similar to volume, reflect project lifetimes, some of which are one year, some longer. We did not attempt to validate this metric because the price at which a project offers its product speaks for itself, at least in terms of total price. The stated price in terms of $/tCO₂ depends on several other factors, however, including projects’ estimated volume. As reported, the stated price does not reflect project duration, i.e. the reality that a ton of permanently removed carbon is a meaningfully different product than a ton of temporarily removed carbon. This makes permanence another important attribute to include in the [comparison of relative project prices](https://carbonplan.org/research/permanence-calculator).

We are working with collaborators on building domain-specific open source models to assist with price estimation, e.g. for [direct air capture](https://carbonplan.org/research/dac-calculator) and mineralization.

## Additionality

Additionality refers to the causal relationship between the funds a climate project seeks and the climate benefits it claims. Establishing a connection depends on a counterfactual scenario that asks what would happen in the absence of funding. If the project will generate climate benefits but is feasible if and only if it receives payment, then the project is additional. If the project will likely generate climate benefits without the funding, then it is non-additional.

Evaluating additionality is critical but difficult because the counterfactual scenario can only be estimated, not observed — there is no “control” earth. Additionality is also dynamic: it depends on highly contextual information that can change over time, such as price spreads between different commodities.

We examine projects for contextual information around the likelihood of additionality and provide values on a three point scale. Projects with high marginal costs or technologies without commercial markets tend to have higher values. Projects with benefits that have already been promised to other parties, or where non-climate co-benefits justify their economics, have lower values.

To some extent, a high additionality score is contingent on high specificity (see below). If a project lacks specificity and there is not a categorical reason to think otherwise, the project will likely also receive a low additionality score.

Different organizations might have different priorities for project selection. Low values on Additionality are not a concern when the purpose of funding is to advance technology, but should be a primary consideration if the goal is to claim an emissions offset.

<Table
  type='squares'
  three='Climate benefits claimed by the project are likely to be additional. This could be because the project proposes an unconventional action, has relatively high costs, or has no inherent commercial value outside of its climate benefits.'
  two='Climate benefits claimed by the project might be additional, but we cannot validate with confidence. Used when the evidence on additionality is mixed, without a clear balance establishing either a finding of additionality or non-additionality.'
  one='Climate benefits claimed by the project are likely to not be additional because they are likely to occur independently from the proposed investment. This could be because the proposed activity is already commonplace or required by law; because the project has promised or could promise its climate benefits to another party; or because the climate benefits it claims are logically implied by pre-existing commitments.'
></Table>

## Specificity

Specificity reflects whether there is enough detailed information in project proposals, publications, or other public materials for us to validate our metrics. All entries in this database are based on projects’ public proposals, which provide a baseline level of information and transparency. Our specificity metric is intended to indicate when the available information goes above and beyond that baseline.

The utility of different information depends on the project category, but can include: specific project parameters (locations, practices), specific technology components, peer-reviewed publications, third-party verifications, and any datasets or models used for project quantification or life cycle assessment.

In considering specificity, we appreciate there can be sensitivity around proprietary and private information, including intellectual property for technology, or information about land owners and existing business practices. A low value on specificity does not necessarily mean a carbon removal strategy cannot be effective, but it does indicate the importance of accurately measuring and verifying project performance.

In general, we encourage sharing as many details as possible. We believe that making specific project information more public and transparent can help the field develop new and better solutions, as well as help organizations make better decisions when selecting projects.

<Table
  type='squares'
  three='Project either uses an established approach and full details can be obtained on implementation, or uses an early-stage approach but makes extensive details available about the planned implementation and its grounding in existing data and research.'
  two='Project uses an established approach with few details available on the specifics of its implementation, or describes a new approach but without details on its plan.'
  one='Critical project data needed for validation cannot be obtained. Key pieces of third-party verification in progress but not yet available.'
></Table>

## Rating

After analyzing each metric separately for validation, we reflect our overall confidence in project claims with a single rating on a scale from 1 to 5. Validation of mechanism, volume, negativity, or permanence each add 1 point to the total. For additionality, which is scored on a three point scale, we subtract 1 point from the total if the project receives a 1/3 and we add 1 point to the total if the project receives a 3/3, and otherwise do not change it. The lowest rating a project can receive is 1.

Price is not reflected in this rating because we do not attempt to validate it. Specificity is not reflected explicitly, but is embedded in our ability to validate or score the other metrics.

Rating does not necessarily reflect project quality, but rather our ability to validate key information. Furthermore, as with validation of the individual metrics, a low rating should not necessarily be interpreted as a criticism of the project, though it may indicate concerns that could be resolved with more information. As we develop better methods for validation, we expect to be able to refine our ratings.
