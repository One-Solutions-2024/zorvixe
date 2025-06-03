<?php 

class Contact_model extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->load->database();
    }

    public function save_contact($data) {
        return $this->db->insert('submit-contact', $data);
    }

    public function get_contacts() {
        $query = $this->db->get('submit-contact');
        return $query->result_array();
    }

    public function delete_contact($id) {
        return $this->db->delete('submit-contact', array('id' => $id));
    }
} 


?>