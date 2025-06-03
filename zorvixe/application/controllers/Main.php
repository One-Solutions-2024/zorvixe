<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	 public function __construct()
	 {
	parent::__construct();
		}
	
	public function index()
	{
		$this->load->database();
		$data['title'] = 'Home';
		$this->load->view('include/header', $data);
		$this->load->view('viewpages/index');
		$this->load->view('include/footer');
	}

	public function about_us()
	{
		$data['title'] = 'About Us';
		$this->load->view('include/header', $data);
		$this->load->view('viewpages/about_us');
		$this->load->view('include/footer');
	}
	
	public function contact_us()
	{
		$data['title'] = 'Contact Us';
		$this->load->view('include/header', $data);
		$this->load->view('viewpages/contact_us');
		$this->load->view('include/footer');
	}
	public function webdevelopment()
	{
		$data['title'] = 'Web Development';
		$this->load->view('include/header', $data);
		$this->load->view('viewpages/webdevelopment');
		$this->load->view('include/footer');
	}
	public function digitalmarketing()
	{
		$data['title'] = 'Digital Marketing';
		$this->load->view('include/header', $data);
		$this->load->view('viewpages/digitalmarketing');
		$this->load->view('include/footer');
	}
	public function seo()
	{
		$data['title'] = 'SEO Services';
		$this->load->view('include/header', $data);
		$this->load->view('viewpages/seo');
		$this->load->view('include/footer');
	}
	public function mobile_app_solutions()
	{
		$data['title'] = 'Mobile App Solutions';
		$this->load->view('include/header', $data);
		$this->load->view('viewpages/mobile_app_solutions');
		$this->load->view('include/footer');
	}
	public function ui_ux()
	{
		$data['title'] = 'UI/UX Design';
		$this->load->view('include/header', $data);
		$this->load->view('viewpages/ui_ux');
		$this->load->view('include/footer');
	}
	public function webhosting()
	{
		$data['title'] = 'Web Hosting';
		$this->load->view('include/header', $data);
		$this->load->view('viewpages/webhosting');
		$this->load->view('include/footer');
	}
	
	public function privacy_policy()
	{
		$data['title'] = 'Privacy Policy';
		$this->load->view('include/header', $data);
		$this->load->view('viewpages/privacy_policy');
		$this->load->view('include/footer');
	}
	public function terms_conditions()
	{
		$data['title'] = 'Terms & Conditions';
		$this->load->view('include/header', $data);
		$this->load->view('viewpages/terms_conditions');
		$this->load->view('include/footer');
	}
	
	public function maintainance()
	{
		$data['title'] = 'Maintainance';
		$this->load->view('viewpages/maintainance', $data);
	}
	public function notfound()
	{
		$data['title'] = 'Page Not Found';
		$this->load->view('viewpages/notfound', $data);
	}
	
	public function store()
	{
		
		$data = [
			'name' => $this->input->post('name'),
			'email' => $this->input->post('email'),
			'phone' => $this->input->post('phone'),
			'message' => $this->input->post('message'),
			'subject' => $this->input->post('subject'),
			'status' => 'active',
			'created_at' => date('Y-m-d H:i:s')
		];

		$this->load->model('contact_model', 'contact');
		if ($this->contact->save_contact($data)) {
			$this->session->set_flashdata('success', 'Contact saved successfully.');
		} else {
			$this->session->set_flashdata('error', 'Failed to save contact.');
		}
		redirect('contact_us');
	}
	
}

?>