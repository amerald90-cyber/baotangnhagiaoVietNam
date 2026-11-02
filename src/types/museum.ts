export type VerificationStatus = 'verified' | 'pending_review' | 'illustrative_demo';

export type RoomId =
  | 'main-hall'
  | 'room-1'
  | 'room-2'
  | 'room-3'
  | 'room-4'
  | 'room-5'
  | 'room-6';

export type NavigationTab =
  | 'home'
  | 'tour360'
  | 'eras'
  | 'educators'
  | 'archives'
  | 'ai-Photo'
  | 'ai-guide'
  | 'learning'
  | 'about'
  | 'admin';

export interface ReferenceSource {
  id: string;
  title: string;
  authorOrOrg: string;
  year?: string;
  type: 'book' | 'archive' | 'state_record' | 'museum_collection' | 'academic_paper';
  note?: string;
  verified: boolean;
}

export interface LifeMilestone {
  year: string;
  title: string;
  description: string;
  location?: string;
}

export interface EducatorProfile {
  id: string;
  fullName: string;
  alternateNames?: string[];
  honorificTitle: string;
  birthDeathYears: string;
  hometown: string;
  region: 'Bắc Bộ' | 'Trung Bộ' | 'Nam Bộ' | 'Toàn quốc';
  primaryRoomId: RoomId;
  secondaryRoomIds?: RoomId[];
  eraLabel: string;
  fields: string[];
  themes: string[];
  verificationStatus: VerificationStatus;
  shortSummary: string;
  educationAndTeachingJourney: string[];
  milestones: LifeMilestone[];
  contributions: string[];
  educationalPhilosophy: string;
  lessonsForToday: string[];
  documentedQuotes: {
    quote: string;
    contextAndSource: string;
  }[];
  relatedArchiveIds: string[];
  relatedEducatorIds: string[];
  references: ReferenceSource[];
  suggestedQuestions: string[];
  portraitStyle: {
    bgPrimary: string;
    bgSecondary: string;
    accentColor: string;
    attireType: 'confucian_scholar' | 'modern_suit' | 'resistance_educator' | 'contemporary_teacher' | 'academic_gown';
    symbolIcon: 'scroll' | 'brush' | 'book' | 'lantern' | 'lotus' | 'globe' | 'chalkboard';
    inscription: string;
  };
  customPortraitUrl?: string;
}

export interface Hotspot360 {
  id: string;
  roomId: RoomId;
  type: 'portrait' | 'artifact' | 'plaque' | 'portal';
  title: string;
  subtitle: string;
  yaw: number; // -180 to 180 degrees horizontal
  pitch: number; // -45 to 45 degrees vertical
  linkedEducatorId?: string;
  linkedArchiveId?: string;
  targetRoomId?: RoomId;
  description?: string;
  verificationStatus: VerificationStatus;
}

export interface ExhibitionRoom {
  id: RoomId;
  code: string;
  name: string;
  shortName: string;
  periodRange: string;
  subtitle: string;
  curatorialStatement: string;
  historicalNote: string;
  verificationStatus: VerificationStatus;
  wallColorTop: string;
  wallColorBottom: string;
  floorColor: string;
  ceilingColor: string;
  accentColor: string;
  architecturalMotif: 'temple_pillars' | 'french_colonial_arch' | 'resistance_bamboo' | 'modern_hall' | 'digital_futuristic' | 'memorial_sanctuary' | 'grand_rotunda';
  floorPlanPos: { x: number; y: number }; // percentage 0-100 on mini-map
  connectedRoomIds: RoomId[];
  hotspots: Hotspot360[];
  customPanoramaUrl?: string;
}

export type ArchiveCategory =
  | 'portrait'
  | 'classroom_photo'
  | 'book_text'
  | 'archive_doc'
  | 'audio_video'
  | 'timeline_event'
  | 'story'
  | 'community_contribution';

export interface ArchiveItem {
  id: string;
  title: string;
  category: ArchiveCategory;
  yearOrPeriod: string;
  authorOrRepository: string;
  origin: string;
  usageRights: string;
  verificationStatus: VerificationStatus;
  description: string;
  detailedContent: string;
  ocrTranscript?: string;
  linkedEducatorIds: string[];
  linkedRoomId: RoomId;
  keywords: string[];
  visualTheme: {
    bgColor: string;
    borderColor: string;
    iconType: 'manuscript' | 'photo' | 'stele' | 'book' | 'film' | 'letter' | 'chalkboard';
    caption: string;
  };
}

export interface LearningQuestion {
  id: string;
  roomId: RoomId;
  ageGroup: 'tieu_hoc' | 'thcs_thpt' | 'dai_hoc_cong_chung';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  reflectionPrompt: string;
  sourceReference: string;
}

export interface MysteryClueItem {
  id: string;
  targetEducatorId: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Nâng cao';
  clues: string[];
  historicalLesson: string;
}

export interface TributeMessage {
  id: string;
  senderName: string;
  senderRole: string;
  teacherDedicatedTo: string;
  schoolOrLocality: string;
  message: string;
  createdAt: string;
  isApproved: boolean;
}
