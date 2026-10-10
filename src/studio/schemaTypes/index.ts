import { speakerSchema } from './speaker'
import { scheduleItem } from './scheduleDay'
import { eventsSchema } from './events'
import { faqSchema } from './faq'
import { teamMemberSchema } from './team'
import { blogPostSchema } from './blog'
import { campusRegistrationSchema } from './campusRegistration'
import { sponsorSchema } from './sponsor'
import { scheduleDay } from './scheduleDay'

export const schemaTypes = [
  speakerSchema,
  eventsSchema,
  faqSchema,
  teamMemberSchema,
  blogPostSchema,
  campusRegistrationSchema,
  sponsorSchema,
  scheduleItem,
  scheduleDay
]
