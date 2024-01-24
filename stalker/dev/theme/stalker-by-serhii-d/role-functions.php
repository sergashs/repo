<?php

//this file adds a single role to your site - from this you should be able to create any roles you wish
//Amend as desired and then upload to your child theme in the root directory - the one that has functions.php in it !!

//code to add tutor role 


function bra_add_new_roles( $bbp_roles )
{
/* Add a role called tutor */
$bbp_roles['bbp_tutor1'] = array(
'name' =>'Tutor1',
'capabilities' =>bra_custom_capabilities( 'bbp_tutor' )
);

/* Add a role called tutor */
$bbp_roles['bbp_tutor2'] = array(
	'name' =>'Tutor2',
	'capabilities' =>bra_custom_capabilities( 'bbp_tutor' )
	);

return $bbp_roles;
}



function bra_add_role_caps_filter( $caps, $role )
{
/* Only filter for roles we are interested in! */
if( $role == 'bbp_tutor1' )
$caps = bra_custom_capabilities( $role );

return $caps;

if( $role == 'bbp_tutor2' )
$caps = bra_custom_capabilities( $role );

return $caps;
}



function bra_custom_capabilities( $role )
{
	switch ( $role )
	{

		/* Capabilities for 'tutor' role */
		case 'bbp_tutor1':
		return array(
		// Primary caps
		'spectate' => true,
		'participate' => true,
		'moderate' => false,
		'throttle' => false,
		'view_trash' =>false,

		// Forum caps
		'publish_forums' =>false,
		'edit_forums' => false,
		'edit_others_forums' => false,
		'delete_forums' => false,
		'delete_others_forums' => false,
		'read_private_forums' => true,
		'read_hidden_forums' => false,

		// Topic caps
		'publish_topics' => true,
		'edit_topics' => true,
		'edit_others_topics' => false,
		'delete_topics' => false,
		'delete_others_topics' => false,
		'read_private_topics' => true,

		// Reply caps
		'publish_replies' => true,
		'edit_replies' => true,
		'edit_others_replies' => false,
		'delete_replies' => false,
		'delete_others_replies' => false,
		'read_private_replies' => true,

		// Topic tag caps
		'manage_topic_tags' => false,
		'edit_topic_tags' => false,
		'delete_topic_tags' => false,
		'assign_topic_tags' => true,
		);

		break;

		default :
		return $role;
	}

	switch ( $role )
	{

		/* Capabilities for 'tutor' role */
		case 'bbp_tutor2':
		return array(
		// Primary caps
		'spectate' => true,
		'participate' => true,
		'moderate' => false,
		'throttle' => false,
		'view_trash' =>false,

		// Forum caps
		'publish_forums' =>false,
		'edit_forums' => false,
		'edit_others_forums' => false,
		'delete_forums' => false,
		'delete_others_forums' => false,
		'read_private_forums' => true,
		'read_hidden_forums' => false,

		// Topic caps
		'publish_topics' => true,
		'edit_topics' => true,
		'edit_others_topics' => false,
		'delete_topics' => false,
		'delete_others_topics' => false,
		'read_private_topics' => true,

		// Reply caps
		'publish_replies' => true,
		'edit_replies' => true,
		'edit_others_replies' => false,
		'delete_replies' => false,
		'delete_others_replies' => false,
		'read_private_replies' => true,

		// Topic tag caps
		'manage_topic_tags' => false,
		'edit_topic_tags' => false,
		'delete_topic_tags' => false,
		'assign_topic_tags' => true,
		);

		break;

		default :
		return $role;
	}
}