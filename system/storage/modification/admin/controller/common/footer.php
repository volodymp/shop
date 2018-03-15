<?php
class ControllerCommonFooter extends Controller {
	public function index() {
		$this->load->language('common/footer');

		$data['text_footer'] = $this->language->get('text_footer');

		if ($this->user->isLogged() && isset($this->request->get['token']) && ($this->request->get['token'] == $this->session->data['token'])) {
			$data['text_version'] = sprintf($this->language->get('text_version'), VERSION);
		} else {
			$data['text_version'] = '';
		}
		

		if (isset($this->request->get['token'])) {
			$data['mainteance'] = $this->config->get('config_maintenance');
			$data['mainteance_url'] = $this->url->link('setting/fast_maintenance','token='. $this->session->data['token']);
		} else {
			$data['mainteance'] = false;
		}
			
		return $this->load->view('common/footer.tpl', $data);
	}
}
