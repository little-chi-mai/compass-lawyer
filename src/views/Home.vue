<template>
  <div class="home">
    <h1>Welcome to Compass Lawyers! [<a href="">中文</a>首頁]</h1>
    <h3>Our commitments to clients:</h3>
    <ul>
      <li>protect your interests and uphold your rights vehemently;</li>
      <li>provide professional, comprehensive and efficient legal services<sup>1</sup>;</li>
      <li>comply with "The lawyer/client relationship" guidance of the Law Society of NSW;</li>
      <li>offer competitive "fixed fee legal services"<sup>2</sup>;</li>
      <li>accessible anytime by diversified channels: website, email, phone, fax, face-to-face interview, etc;</li>
      <li>reply your enquiry within 24 hours.</li>
    </ul>

    <ol>
      <li>In addition to being member of the Law Society of NSW, we are also member of CPA Australia/ACCA and CFA Institute (Chartered Finanical Analyst). We also invest in information technology to enhance our capability to servicing  our clients efficiently.</li>
      <li>Fixed fee legal services include buy/sell property, preparation of Will and other popular legal services.</li>
    </ol>

    <hr>

    <p>We invite you to <router-link to="/contact-us">contact us</router-link> anytime!</p>
    <p>Email: info@compasslawyers.com.au</p>
    <table>
      <tr>
        <th>Office</th>
        <th>(02) 9233 4776</th>
      </tr>
      <tr>
        <th>Mobile</th>
        <th>0401 223 773</th>
      </tr>
      <tr>
        <th>Fax</th>
        <th>(02) 9233 4712</th>
      </tr>
    </table>

    <p>Office Address:</p>
    <p>Suite 804, Level 8, 70 Pitt Street, Sydney, NSW 2000.</p>
    <p>[1 minute from Wynyard Station; around the corner from Hunter Street]</p>

    <hr>

    <p>Legal Notices: <router-link to="/privacy">Privacy</router-link> & <router-link to="/disclaimer">Disclaimer</router-link></p> 

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ is an alias to /src

export default Vue.extend({
  name: 'Home',
});
</script>

<style lang="scss" scoped>
li {
  text-align: left;
}
table, th{
  border: 1px solid black;
  border-collapse: collapse;
  text-align: left;
  padding: 0.5rem;
  margin: 0 auto;
}

</style>
