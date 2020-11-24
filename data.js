module.exports = {
  type: 'ProjectCollection',
  projects: [
    {
      type: 'Project',
      name: 'Climeworks',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Removes carbon from the atmosphere using a solid chemical sorbent. Captured carbon dioxide is geologically sequestered in mineral form.',
          comment: '',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 50.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Volume based on the annual capacity of a pilot plant in Iceland commissioned in October 2017. Larger-scale plants are under construction that may offer more volume.',
          comment:
            'Scale of volume is commensurate with published sorbent technology. Technology can be deployed on a modular basis.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.9,
          units: '',
          rating: 0.0,
          notes:
            'Claims total emissions are 0.1 tCO2 for every 1 tCO2 removed.',
          comment:
            'Detailed assessment in collaboration with research group is pending publication. Low ratio likely depends on availability of low-carbon energy in Iceland.',
          removal: 1.0,
          emissions: 0.1,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'The only reason to implement a project like this is to generate climate benefits. New investments may relate to future deployments rather than current procurements.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 767.5,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: 'Reported value is the average of the range $735-800.',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Basic technology is well understood through both demonstrations and published litearture. Publications on LCA are pending. Publications or public datasets on specific approaches are not yet available.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['dac', 'mineralization'],
      id: 'STRP001',
      description: 'Direct air capture and mineralization.',
      location: {
        name: 'Iceland',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
  ],
}
