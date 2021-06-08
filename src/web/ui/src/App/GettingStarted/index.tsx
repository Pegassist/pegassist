import React from 'react';
import { Grid } from 'semantic-ui-react';
import { API_ROOT } from '../../config';

const GettingStartedContent = () => (
  <div className="static-content-container">
    <h2 className="static-header">Getting Started</h2>
    <p>
      PegAssist requires minimal user effort to design prime editing guide RNA
      (pegRNA) and associated PE3/PE3b guides to improve efficiency and
      precision of genome editing.
    </p>

    <h3 className="static-header">PegAssist needs from you:</h3>
    <ul>
      <li>
        The wildtype gene sequence (include ~100 base pairs on each side of the
        desired edit) with parentheses around the region you wish to edit
      </li>
      <li>The desired edit for the region in parentheses</li>
      <li>
        <i>For some:</i> PegAssist will attempt to design a spacer, but some
        genes will have PAM sites distant from the desired edit. These spacers
        are less efficient and are not detected by PegAssist. These genes will
        require a specified spacer sequence to direct the Cas9 nickase. Be sure
        the cut site for this spacer is 5’ of the region of interest
      </li>
      <li>
        <i>Advanced Options:</i> The default values for PBS and RT length are
        based on current data on editing efficiency, but this option is
        available to edit. The protospacer adjacent motif (PAM) sequence “NGG”
        is the default for use with Streptococcus pyrogenes Cas9 (SpCas9). If
        you are using a different Cas9, the PAM sequence may be adjusted with
        IUPAC ambiguity letters. Acceptable characters are “ATGCMRWSYKVHDBN”
      </li>
    </ul>

    <h3 className="static-header">Examples of user input:</h3>

    <p>To design a point mutation (Ex: G&#8594;A)</p>
    <img
      className="static-image"
      alt="getting started step 1"
      src={`${API_ROOT}/images/gettingStarted1.png`}
    />

    <div className="static-spacer"></div>
    <p>
      To design a 1 base pair <b>deletion</b>
    </p>
    <img
      className="static-image"
      alt="getting started step 2"
      src={`${API_ROOT}/images/gettingStarted2.png`}
    />

    <div className="static-spacer"></div>
    <p>
      To design a 1 base pair <b>insertion</b>
    </p>
    <img
      className="static-image"
      alt="getting started step 3"
      src={`${API_ROOT}/images/gettingStarted3.png`}
    />

    <h3 className="static-header">User Selections</h3>
    <p>
      Prime editing is still a new technology, and the available information on
      optimal pegRNA design is limited. The default selections and outputs on
      PegAssist are based on current performance data. All available options are
      provided in case you would like to make a specific selection. Be sure to
      follow the warnings and comments when selecting components to avoid low
      efficiency editing
    </p>

    <h3 className="static-header">Support</h3>
    <p>
      This work is supported by The Department of Pharmacology, University of
      Maryland School of Medicine; The National Cancer Institute (T32CA154274),
      and The National Institutes of Health High-Risk, High-Reward Research
      Program (DP2MH122398).
    </p>

    <h3 className="static-header">Ouput</h3>
    <p>
      PegAssist will display the final pegRNA sequence with annotations to aid
      in cloning. For more information on the cloning steps involved, see
      Richardson & Steyert et al. 2021.
    </p>

    <h3 className="static-header">Terms</h3>
    <p>
      <b>pegRNA – </b>The prime editing guide RNA (pegRNA) is the full assembly
      of the spacer, a Cas9 scaffold, a PBS, and an RTT. This will guide the
      Cas9-Reverse Transcriptase fusion protein to your region of interest to
      produce the desired edit.
    </p>
    <p>
      <b>Spacer – </b>A region of homology that guides Cas9 to a specific
      genomic location. In standard CRISPR applications, this component on a
      scaffold would make up the gRNA. In prime editing the spacer will guide
      Cas9 nickase to cut the opposing strand.
    </p>
    <p>
      <b>PBS – </b>The primer binding site is a second region of homology which
      binds the strand opposite the spacer. This will position the RTT for
      extension.
    </p>
    <p>
      <b>RTT/RT Template – </b>The reverse transcriptase template contains the
      desired edit and some amount of RNA homologous to the target region.
      Reverse transcriptase will generate a 3’ extension of the gDNA bound to
      the PBS based on the RTT sequence.
    </p>
    <p>
      <b>PE3/PE3b guide – </b> A second guide RNA that directs Cas9 nickase to
      cut the unedited gDNA strand and improve editing efficiency. This will
      bias the mismatch repair mechanism to preferentially retain the edited
      DNA. PE3 guides make this cut further from the edited region than PE3b
      guides and are less likely to create this bias.
    </p>
  </div>
);

const AboutContainer = () => (
  <Grid>
    <div style={{ height: 40 }}></div>
    <Grid.Row>
      <Grid.Column width={16}>
        <GettingStartedContent />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
export default AboutContainer;
