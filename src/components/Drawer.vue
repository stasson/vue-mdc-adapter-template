<template>
  <mdc-drawer toggle-on="toggle-drawer">
    <mdc-drawer-list>
      <mdc-drawer-item start-icon="inbox">Inbox</mdc-drawer-item>
      <mdc-drawer-item start-icon="send">Sent Mail</mdc-drawer-item>
      <mdc-drawer-item start-icon="drafts">Drafts</mdc-drawer-item>
    </mdc-drawer-list>
  </mdc-drawer>
</template>

<script>
	export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>
