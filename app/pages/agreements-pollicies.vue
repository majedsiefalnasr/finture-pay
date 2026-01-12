<script>
import Agreements from '~/components/shared/Agreements.vue'
import ContactCard from '~/components/shared/ContactCard.vue'
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import PageHeader from '~/components/shared/PageHeader.vue'

export default {
  components: {
    AppFooter,
    GetStarted,
    PageHeader,
    Agreements,
    ContactCard,
  },
  data() {
    return {
      termsList: [
        {
          subtitle: 'For Individuals',
          date: 'UPDATED: OCT 2025',
          title: 'Terms of Service',
          description:
            'Comprehensive terms governing your use of Finture individual and business accounts, payment services, and digital wallets.',
          icon: 'line:file02',
          color: 'primary',

          actionText: 'Read Full Terms',
          actionLink: '#',
        },
        {
          subtitle: 'For Individuals',
          date: 'UPDATED: OCT 2025',
          title: 'Business Service Agreement',
          description:
            'Specific terms for business users including payment acceptance, merchant responsibilities, and settlement procedures.',
          icon: 'line:file02',
          color: 'primary',

          actionText: 'Read Full Terms',
          actionLink: '#',
        },
      ],
      privacyList: [
        {
          subtitle: 'For Individuals',
          date: 'UPDATED: OCT 2025',
          title: 'Privacy Policy',

          description:
            'How we collect, use, store, and protect your personal information. Full compliance with KVKK and GDPR principles.',
          icon: 'line:signature',
          color: 'red',
          actionText: 'Read Full Policy',
          actionLink: '#',
        },
        {
          subtitle: 'For Individuals',
          date: 'UPDATED: OCT 2025',
          title: 'Cookie Policy',
          description:
            'Information about cookies and tracking technologies used on Finture websites and applications.',
          icon: 'line:file02',
          color: 'red',
          actionText: 'Read Full Policy',
          actionLink: '#',
        },
        {
          subtitle: 'For Individuals',
          date: 'UPDATED: OCT 2025',
          title: 'KVKK Disclosure Text',
          description:
            'Turkish Data Protection Law (KVKK) required disclosure regarding personal data processing.',
          icon: 'line:file02',
          color: 'red',
          actionText: 'Read Full Text',
          actionLink: '#',
        },
      ],
      finanicalList: [
        {
          subtitle: 'For Individuals',
          date: '',
          title: 'Anti-Money Laundering (AML) Policy',
          description:
            'Finture,s commitment to preventing financial crime, including customer due diligence and suspicious activity reporting procedures.',
          icon: '',
          color: '',
          actionText: 'Read Full Policy',
          actionLink: '#',
        },
        {
          subtitle: 'For Individuals',
          date: '',
          title: 'Complaint Resolution Procedure',
          description:
            'Process for submitting and resolving customer complaints, including escalation to Turkish banking ombudsman if necessary.',
          icon: '',
          color: '',
          actionText: 'Read Full Procedure',
          actionLink: '#',
        },
        {
          subtitle: 'For Individuals',
          date: '',
          title: 'Deposit Insurance Information',
          description:
            'Details of SDIF (Savings Deposit Insurance Fund) coverage for Finture customer funds.',
          icon: '',
          color: '',

          actionText: 'Read Full Information',
          actionLink: '#',
        },
        {
          subtitle: 'For Individuals',
          date: '',
          title: 'Fees and Commission Brochure',
          description:
            'Official fee schedule filed with regulatory authorities (also available in Fees and Commissions section',
          icon: '',
          color: '',

          actionText: 'Download Official Brochure',
          actionLink: '#',
        },
      ],
      paymentServicesList: [
        {
          subtitle: 'For Individuals',
          date: '',
          title: 'Payment Services Framework Agreement',

          description:
            'Terms governing use of Finture payment acceptance services (POS, Virtual POS, Payment Links).',
          icon: '',
          color: '',
          actionText: 'Read Full Agreement',
          actionLink: '#',
        },
        {
          subtitle: 'For Individuals',
          date: '',
          title: 'Chargeback and Dispute Policy',
          description:
            'Procedures for handling payment disputes, chargeback claims, and merchant responsibilities.',
          icon: '',
          color: '',
          actionText: 'Read Full Policy',
          actionLink: '#',
        },
        {
          subtitle: 'For Individuals',
          date: '',
          title: 'Acceptable Use Policy',
          description:
            'Prohibited business types, restricted products, and merchant compliance requirements.',
          icon: '',
          color: '',
          actionText: 'Read Full Policy',
          actionLink: '#',
        },
      ],
      securityRiskcList: [
        {
          subtitle: 'For Individuals',
          date: '',
          title: 'Information Security Policy',
          description:
            'Overview of security measures, encryption standards, and data protection mechanisms.',
          icon: '',
          color: '',
          actionText: 'Read Full Policy',
          actionLink: '#',
        },
        {
          subtitle: 'For Individuals',
          date: '',
          title: 'Fraud Prevention Policy',
          description: 'How Finture detects, prevents, and responds to fraudulent activity.',
          icon: '',
          color: '',
          actionText: 'Read Full Policy',
          actionLink: '#',
        },
      ],
      accountAgreementsList: [
        {
          subtitle: 'For Individuals',
          date: '',
          title: 'Individual Account Agreement',
          description: 'Specific terms for personal digital wallet and card services.',
          icon: '',
          color: '',
          actionText: 'Read Full Agreement',
          actionLink: '#',
        },
        {
          subtitle: 'For Individuals',
          date: '',
          title: 'Corporate Account Agreement',
          description:
            'Terms for business wallets, multi-user access, and corporate financial services.',
          icon: '',
          color: '',
          actionText: 'Read Full Agreement',
          actionLink: '#',
        },
      ],
      regulatoryDocumentation: [
        {
          subtitle: 'For Individuals',
          date: '',
          title: 'PCI DSS Certification',
          description: 'Evidence of Payment Card Industry Data Security Standard compliance.',
          icon: '',
          color: '',
          actionText: 'View Certificate',
          actionLink: '#',
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <section class="page-header">
      <PageHeader
        :variant="'help-center'"
        :title="'Legal Documentation & User Agreements'"
        :description="'Transparency and trust are fundamental to Finture. ?Review our complete legal framework governing your use of Finture services.'"
        :category="'Agreements and Policies'"
        :blog-info="''"
        :search-placeholder="''"
      />
    </section>
    <u-container>
      <section class="user-agreements">
        <h4 class="">User Agreements</h4>
        <u-row cols="12" md="12" class="mt-5">
          <u-col v-for="(rec, index) in termsList" :key="index" clols="12" md="6">
            <Agreements
              :date="rec.date"
              :title="rec.title"
              :description="rec.description"
              :icon="rec.icon"
              :color="rec.color"
              :action-text="rec.actionText"
              :action-link="rec.actionLink"
            />
          </u-col>
        </u-row>
      </section>

      <section class="privacy-data-protection">
        <h4 class="">Privacy & Data Protection</h4>
        <u-row cols="12" md="12" class="mt-5">
          <u-col v-for="(rec, index) in privacyList" :key="index" clols="12" md="4">
            <Agreements
              :date="rec.date"
              :title="rec.title"
              :description="rec.description"
              :icon="rec.icon"
              :color="rec.color"
              :action-text="rec.actionText"
              :action-link="rec.actionLink"
            />
          </u-col>
        </u-row>
      </section>

      <section class="finanical-compliance">
        <h4 class="">Financial & Compliance</h4>
        <u-row cols="12" md="12" class="mt-5">
          <u-col v-for="(rec, index) in finanicalList" :key="index" clols="12" md="6">
            <Agreements
              :date="rec.date"
              :title="rec.title"
              :description="rec.description"
              :icon="rec.icon"
              :color="rec.color"
              :action-text="rec.actionText"
              :action-link="rec.actionLink"
            />
          </u-col>
        </u-row>
      </section>

      <section class="privacy-data-protection">
        <h4 class="">Payment Services</h4>
        <u-row cols="12" md="12" class="mt-5">
          <u-col v-for="(rec, index) in paymentServicesList" :key="index" clols="12" md="4">
            <Agreements
              :date="rec.date"
              :title="rec.title"
              :description="rec.description"
              :icon="rec.icon"
              :color="rec.color"
              :action-text="rec.actionText"
              :action-link="rec.actionLink"
            />
          </u-col>
        </u-row>
      </section>

      <section class="security-risk">
        <h4 class="">Security & Risk</h4>
        <u-row cols="12" md="12" class="mt-5">
          <u-col v-for="(rec, index) in securityRiskcList" :key="index" clols="12" md="6">
            <Agreements
              :date="rec.date"
              :title="rec.title"
              :description="rec.description"
              :icon="rec.icon"
              :color="rec.color"
              :action-text="rec.actionText"
              :action-link="rec.actionLink"
            />
          </u-col>
        </u-row>
      </section>

      <section class="security-risk">
        <h4 class="">Account Agreements</h4>
        <u-row cols="12" md="12" class="mt-5">
          <u-col v-for="(rec, index) in accountAgreementsList" :key="index" clols="12" md="6">
            <Agreements
              :date="rec.date"
              :title="rec.title"
              :description="rec.description"
              :icon="rec.icon"
              :color="rec.color"
              :action-text="rec.actionText"
              :action-link="rec.actionLink"
            />
          </u-col>
        </u-row>
      </section>

      <section class="regulatory-documentation">
        <h4 class="">Regulatory Documentation</h4>
        <u-row cols="12" md="12" class="mt-5">
          <u-col v-for="(rec, index) in regulatoryDocumentation" :key="index" clols="12" md="12">
            <Agreements
              :date="rec.date"
              :title="rec.title"
              :description="rec.description"
              :icon="rec.icon"
              :color="rec.color"
              :action-text="rec.actionText"
              :action-link="rec.actionLink"
            />
          </u-col>
        </u-row>
      </section>
    </u-container>

    <ContactCard class="questions" />

    <section class="footer">
      <GetStarted />
      <AppFooter />
    </section>
  </div>
</template>

<style>
.user-agreements,
.privacy-data-protection,
.finanical-compliance,
.security-risk,
.security-risk,
.regulatory-documentation {
  margin-bottom: 90px;
}

.user-agreements {
  margin-top: 90px;
}
</style>
