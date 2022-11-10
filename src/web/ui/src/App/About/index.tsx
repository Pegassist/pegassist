import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';

const AboutContent = () => (
  <div className="static-content-container">
    <h2 className="static-header">About Pegassist.app</h2>
    <p>
      Pegassist (v 0.8 beta) is a web app to design prime editing guide RNA
      (pegRNA) for genome editing with Cas9 nickase–reverse transcriptase
      fusions previously described by Liu and colleagues (Anzalone et al. Nature
      2019).
    </p>

    <h3 className="static-header">Instructions</h3>
    <p>
      Give Pegassist your target genomic sequence and the edits you want to
      introduce. The app will propose sequences for a Prime Editing strategy,
      along with a cloning strategy to build these reagents using the Pegassist
      plasmid set (available soon on Addgene) developed by Richardson, Steyert,
      et al. 2021 in prep or those developed by Anzalone et al. 2019.
    </p>
    <p>
      You can keep the default options, or choose to look under the hood using
      Advanced Options to tweak parameters. Bear in mind, Prime Editing is an
      evolving technology, and this app is in beta. Pegassist outputs are based
      on available performance data as of January 2021 and may require
      experimental validation.
    </p>

    <h3 className="static-header">Copyright and Citation</h3>
    <p>
      All copyright is exclusively owned by the University of Maryland.
      Pegassist is free for non-profit and academic research. All commercial
      rights are reserved. If you use this software for reagent generation in a
      publication, please cite:
    </p>

    <h3 className="static-header">Support</h3>
    <p>
      This work is supported by The Department of Pharmacology, University of
      Maryland School of Medicine; The National Cancer Institute (T32CA154274),
      and The National Institutes of Health High-Risk, High-Reward Research
      Program (DP2MH122398).
    </p>

    <h3 className="static-header">Development team: Poulopoulos Lab</h3>
    <p>
      Prime editing:{' '}
      <a href="https://www.linkedin.com/in/ryanr-richardson/">
        Ryan R. Richardson
      </a>
      ,{' '}
      <a href="https://www.linkedin.com/in/marilyn-steyert-ba617a142/">
        Marilyn Steyert
      </a>
      ,{' '}
      <a href="https://www.linkedin.com/in/colin-robertson-5b0a37b4/">
        Colin Robertson
      </a>
    </p>
    <p>
      Python code:{' '}
      <a href="https://www.linkedin.com/in/marilyn-steyert-ba617a142/">
        Marilyn Steyert
      </a>
      ,{' '}
      <a href="https://www.linkedin.com/in/corinne-martin-765745229">
        Corinne Martin
      </a>
    </p>
    <p>
      Web app: <a href="https://www.linkedin.com/in/flynncorey/">Corey Flynn</a>
    </p>
    <p>
      User interface & design:{' '}
      <a href="https://www.linkedin.com/in/-jeff-smith/">Jeff Smith</a>,{' '}
      <a href="https://www.linkedin.com/in/cheryl-brandenburg-1a7a2a64/">
        Cheryl Brandenburg
      </a>
    </p>

    <h3 className="static-header">Links</h3>
    <a href="http://poulab.org/">Poulopoulos Lab</a>
  </div>
);

const AboutContainer = () => (
  <Grid>
    <div style={{ height: 40 }}></div>
    <Grid.Row>
      <Grid.Column width={16}>
        <AboutContent />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
export default AboutContainer;
